import { Person } from "../../../domain/entity/person";
import { User } from "../../../domain/entity/user";
import { UserRepository } from "../../../domain/repository/user-repository";
import { Connection } from "../../database/connection";

interface UserData {
        id: string;
        id_person: string;
        user_name: string;
        pass: string;
    }
    
    export default class UserRepositoryDatabase implements UserRepository {
        constructor(private connection: Connection) {}
    
        // Método para buscar todos os usuários
        async getAll(): Promise<User[]> {
            const output: User[] = [];
            try {
                const usersData: UserData[] = await this.connection.execute(
                    'SELECT id, id_person, user_name, pass FROM users'
                );
    
                if (usersData && usersData.length > 0) {
                    for (const userData of usersData) {
                        const user = new User(
                            userData.id,
                            userData.id_person,
                            userData.user_name,
                            userData.pass
                        );
                        output.push(user);
                    }
                }
    
                return output;
            } catch (error: unknown) {
                if (error instanceof Error) {
                    throw new Error(`Erro au bescar usuários: ${error.message}`);
                } else {
                    throw new Error('Ocorreu um erro desconhecido ao buscar o usuário');
                }
            }
        }
    
        async getById(id: any): Promise<User> {
            try {
                const usersData: any = await this.connection.execute(
                    'SELECT id, id_person, user_name, pass FROM users WHERE id = :id',
                    { id }
                );
        
                if (usersData.length === 0) {
                    throw new Error(`User com o id ${id} não encontrado`);
                }
        
                const userData = usersData[0]; 

                return new User(
                    userData.id,
                    userData.id_person,
                    userData.user_name,
                    userData.pass
                );
            } catch (error: unknown) {
                if (error instanceof Error) {
                    throw new Error(`Error ao buscar o usuário com o id ${id}: ${error.message}`);
                } else {
                    throw new Error('Ocorreu um erro desconhecido ao buscar o usuário');
                }
            }
        }
        
        
    
        // Método para criar um novo usuário
        async create(): Promise<void> {
            try {
                const { id, id_person, user_name, pass } = user;
                const result = await this.connection.execute(
                    'INSERT INTO users (id, id_person, user_name, pass) VALUES (:id, :id_person, :user_name, :pass)',
                    { id, id_person, user_name, pass }
                );
    
                if (result.affectedRows === 0) {
                    throw new Error('Falha ao inserir Usuário');
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    throw new Error(`Erro ao criar Usuário: ${error.message}`);
                } else {
                    throw new Error('Ocorreu um erro desconhecido ao criar o usuário');
                }
            }
        }
    
        // Método para atualizar um usuário existente
        async update(): Promise<void> {
            try {
                const { id, id_person, user_name, pass } = user;
                const result = await this.connection.execute(
                    'UPDATE users SET id_person = :id_person, user_name = :user_name, pass = :pass WHERE id = :id',
                    { id, id_person, user_name, pass }
                );
    
                if (result.affectedRows === 0) {
                    throw new Error(`Usuário com o id ${id} não encontrado`);
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    throw new Error(`Erro ao atualizar o usuário com o id ${user.id}: ${error.message}`);
                } else {
                    throw new Error('Ocorreu um erro desconhecido ao atualizar o usuário');
                }
            }
        }
    
        // Método para excluir um usuário pelo ID
        async delete(id: any): Promise<void> {
            try {
                const result = await this.connection.execute(
                    'DELETE FROM users WHERE id = :id',
                    { id }
                );
    
                if (result.userData === 0) {
                    throw new Error(`Usuário com o id ${id} não encontrado`);
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    throw new Error(`Erro ao deletar o usuário com o id ${id}: ${error.message}`);
                } else {
                    throw new Error('Ocorreu um erro desconhecido ao excluir o usuário');
                }
            }
        }
    
    
}