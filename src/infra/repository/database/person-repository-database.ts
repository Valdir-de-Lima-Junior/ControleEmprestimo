import { Person } from "../../../domain/entity/person";
import { PersonRepository } from "../../../domain/repository/person-repository";
import { Connection } from "../../database/connection";

export default class PersonRepositoryDatabase implements PersonRepository {
    constructor(private connection: Connection) {}

    async getAll(): Promise<Person[]> {
        const output = [];
        const peopleData = await this.connection.execute(
            `SELECT people.id, people.name, people.document FROM people`
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
            `SELECT people.id, people.name, people.document FROM people WHERE people.id = $1`,
            [ id ]
        );

        if (!personData) {
            throw new Error(`Pessoa não encontrada`);
        }

        const person = new Person(
            personData.id, 
            personData.name, 
            personData.document
        );

        return person;
    }

    async create(person: Person): Promise<void> {
        await this.connection.execute(
            `INSERT INTO people (id, name, document) VALUES $1, $2, $3)`,
            [person.getId(), person.getName(), person.getDocument()]
        );
    }

    async update(person: Person): Promise<void> {
        await this.connection.execute(
            `UPDATE people SET name = $2, document = $3 WHERE id = $1`,
            [person.getId(), person.getName(), person.getDocument()]
        );
    }

    async delete(id: string): Promise<void> {
        const result = await this.connection.execute(
            `DELETE FROM people WHERE id = $1`,
            [ id ]
        );
    }
}