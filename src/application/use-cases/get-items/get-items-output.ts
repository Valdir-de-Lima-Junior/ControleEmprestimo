type ItemTypeOutput = {
    id: string;
    name: string;
}

export type GetItemsOutput = {
    id: string;
    name: string;
    itemType: ItemTypeOutput;
}