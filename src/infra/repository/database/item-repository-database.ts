import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Connection } from "../../database/connection";

export default class ItemRepositoryDatabase implements ItemRepository {
    
    constructor(private connection: Connection) {}
    
    getAll(): Promise<Item[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<Item> {
        throw new Error("Method not implemented.");
    }
    create(item: Item): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(item: Item): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    
}