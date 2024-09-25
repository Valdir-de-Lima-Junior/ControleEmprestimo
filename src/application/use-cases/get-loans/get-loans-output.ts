type ItemOutput = {
    id: string;
    name: string;
}

type ItemTypeOutput = {
    id: string;
    name: string;
}

type PersonOutput = {
    id: string;
    name: string;
}

type UserOutput = {
    id: string;
    name: String;
}

export type GetLoansOutput = {
    id: string;
    item: ItemOutput;
    itemType: ItemTypeOutput;
    person: PersonOutput;
    user: UserOutput;
}