type GetItemType = {
    id: string | undefined;
    name: string;
}

export type GetItemOutput = {
    id: string | undefined;
    name: string;
    itemType: GetItemType;
}