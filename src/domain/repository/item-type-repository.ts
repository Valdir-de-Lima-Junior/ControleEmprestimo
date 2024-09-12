import { ItemType } from "../entity/item-type";

export interface ItemTypeRepository{
    getAll(): ItemType[];
    getById(id: string): ItemType;
    create(item: ItemType): void;
    update(item: ItemType): void;
    
}