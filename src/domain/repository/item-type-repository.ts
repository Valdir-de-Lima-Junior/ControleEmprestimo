import { ItemType } from "../entity/item-type";

export interface ItemTypeRepository{
    getAll(): Promise<ItemType[]>;
    getById(id: string): Promise<ItemType>;
    create(item: ItemType): Promise<void>;
    update(item: ItemType): Promise<void>;
    delete(id: string): Promise<void>;
}