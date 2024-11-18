import { Person } from "../../../domain/entity/person";
import { PersonRepository } from "../../../domain/repository/person-repository";
import { Connection } from "../../database/connection";

export default class PersonRepositoryDatabase implements PersonRepository {
    constructor(private connection: Connection){}
    
    getAll(): Promise<Person[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<Person> {
        throw new Error("Method not implemented.");
    }
    create(item: Person): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(item: Person): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    
}