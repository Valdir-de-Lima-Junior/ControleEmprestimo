type ItemTypeOutput = {
    id: string | undefined;
    name: string;
}

export type GetItemsOutput = {
    id: string | undefined;
    name: string;
    itemType: ItemTypeOutput;
}