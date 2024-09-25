type GetItemType = {
    id: string;
    name: string;
}

export type GetItemOutput = {
    id: string;
    name: string;
    itemType: GetItemType;
}