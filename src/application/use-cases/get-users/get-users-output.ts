type person = {
    id: string | undefined;
    name: string;
}

export type GetUsersOutput = {
    id: string | undefined;
    userName: string;
    person: person;
}