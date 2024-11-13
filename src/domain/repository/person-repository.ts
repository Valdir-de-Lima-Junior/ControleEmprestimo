import { Person } from "../entity/person";

export interface PersonRepository{
    getAll(): Promise<Person[]>;
    getById(id: string): Promise<Person>;
    create(item: Person): Promise<void>;
    update(item: Person): Promise<void>;
    delete(id: string): Promise<void>;
}