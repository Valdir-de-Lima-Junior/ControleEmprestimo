import { Person } from "../../../domain/entity/person";
import { User } from "../../../domain/entity/user";
import { UserRepository } from "../../../domain/repository/user-repository";
import { Connection } from "../../database/connection";

    export default class UserRepositoryDatabase implements UserRepository {
        constructor(private connection: Connection) {}
        
        async getAll(): Promise<User[]> {
            const output = [];
            const usersData = await this.connection.execute(`
                SELECT people.name, people.document, users.id_person AS id, users.user_name, users.id
                FROM users
                LEFT JOIN people ON users.id_person = people.id
            `);
        
            for (const userData of usersData) {
                const person = new Person(
                    userData.id_person,
                    userData.name,
                    userData.document
                    
                );
                
                const user = new User(
                    userData.name,
                    person,
                    userData.id
                );
        
                output.push(user);
            }
        
            return output;
        }    
        
        async getById(id: string): Promise<User> {
            const [ userData ] = await this.connection.execute(`
                SELECT people.name, people.document, users.id_person AS id, users.user_name, users.id
                FROM users
                LEFT JOIN people ON users.id_person = people.id
                WHERE users.id = $1`,
                [id]
            );
        
            if (!userData) {
                throw new Error('Usuario não encontrado');
            }
        
            const person = new Person(
                userData.document,
                userData.name,
                userData.id_person
            );
            const user = new User(
                userData.user_name,
                person,
                userData.id       
            );
        
            return user;
        }
        
        async getByUserName(user_name: string): Promise<User> {
            const [ userData ] = await this.connection.execute(`
                SELECT people.name, people.document, users.id_person AS id, users.user_name, users.id
                FROM users
                LEFT JOIN people ON users.id_person = people.id
                WHERE users.user_name = $1`,
                [user_name]
            );
        
            if (!userData) {
                throw new Error('Usuario não encontrado');
            }
        
            const person = new Person(
                userData.document,
                userData.name,
                userData.id_person
            );
            const user = new User(
                userData.user_name,
                person,
                userData.id       
            );
        
            return user;

        }
        
        async create(user: User): Promise<void> {
            await this.connection.execute(`
                INSERT INTO users (id, id_person, user_name)
                VALUES ($1, $2, $3)`,
                [user.getId(), user.getPerson().getId(), user.getName()]
            );
        }
        
        async update(user: User): Promise<void> {
            await this.connection.execute(`
                UPDATE users
                SET id_person = $1,
                    user_name = $2
                WHERE id = $3`,
                [user.getPerson().getId(), user.getName(),user.getId()]
            );
    
        }
        
        async delete(id: string): Promise<void> {
            throw new Error("Method not implemented.");
        }
        
    }