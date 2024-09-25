import { Person } from "../../../domain/entity/person";

export type GetUsersOutput = {
    id: string;
    userName: string;
    password: string;
    person: Person;
}