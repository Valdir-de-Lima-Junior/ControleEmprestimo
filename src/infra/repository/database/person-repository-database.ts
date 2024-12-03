import { Person } from "../../../domain/entity/person";
import { PersonRepository } from "../../../domain/repository/person-repository";
import { Connection } from "../../database/connection";

export default class PersonRepositoryDatabase implements PersonRepository {
    constructor(private connection: Connection) {}

    async getAll(): Promise<Person[]> {
        const output: Person[] = [];
        const peopleData = await this.connection.execute(
            'SELECT id, name, document FROM people'
        );

        for (const personData of peopleData) {
            const person = new Person(
                personData.id,        
                personData.name,     
                personData.document  
            );
            output.push(person);
        }

        return output;
    }

    async getById(id: any): Promise<Person> {
        const [personData] = await this.connection.execute(
            'SELECT id, name, document FROM people WHERE id = :id',
            { id }
        );

        if (!personData) {
            throw new Error(`Pessoa com o id ${id} não encontrada`);
        }

        return new Person(
            personData.id, 
            personData.name, 
            personData.document
        );
    }

    async create(person: any): Promise<void> {
        const { id, name, document } = person;
        await this.connection.execute(
            'INSERT INTO people (id, name, document) VALUES (:id, :name, :document)',
            { id, name, document }
        );
    }

    async update(person: any): Promise<void> {
        const { id, name, document } = person;
        const result = await this.connection.execute(
            'UPDATE people SET name = :name, document = :document WHERE id = :id',
            { id, name, document }
        );

        if (result.affectedRows === 0) {
            throw new Error(`Pessoa com o id ${id} não encontrada`);
        }
    }

    async delete(id: any): Promise<void> {
        const result = await this.connection.execute(
            'DELETE FROM people WHERE id = :id',
            { id }
        );

        if (result.affectedRows === 0) {
            throw new Error(`Pessoa com o id ${id} não encontrada`);
        }
    }
}
