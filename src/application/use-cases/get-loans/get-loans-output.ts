import { ItemType } from "../../../domain/entity/item-type";

type item = {
    id: string | undefined;
    name: string;
    itemType: ItemType;
}

type person = {
    id: string | undefined;
    name: string;
}

type user = {
    id: string | undefined;
    userName: String;
}

export type GetLoansOutput = {
    id: string | undefined;
    item: item;
    loanDate: Date | undefined;
    returnDate: Date | undefined;
    person: person;
    user: user;
}