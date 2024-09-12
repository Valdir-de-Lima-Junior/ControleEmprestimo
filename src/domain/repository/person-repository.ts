import { Person } from "../entity/person";

export interface PersonRepository{
    getAll(): Person[];
    getById(id: string): Person;
    create(item: Person): void;
    update(item: Person): void;
    
}