type Person = {
    id: string | undefined;
    name: string;
}

export type GetUserOutput = {
    id: string | undefined;
    name: string;
    person: Person;
}