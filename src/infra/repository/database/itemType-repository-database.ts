import { ItemType } from "../../../domain/entity/item-type";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { Connection } from "../../database/connection";

export default class ItemTypeRepositoryDatabase implements ItemTypeRepository{
    constructor(private connection: Connection){}
 
    getAll(): Promise<ItemType[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<ItemType> {
        throw new Error("Method not implemented.");
    }
    create(item: ItemType): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(item: ItemType): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}