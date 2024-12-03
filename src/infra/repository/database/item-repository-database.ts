import { Item } from "../../../domain/entity/item";
import { ItemType } from "../../../domain/entity/item-type";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Connection } from "../../database/connection";

export default class ItemRepositoryDatabase implements ItemRepository {
    
    constructor(private connection: Connection) {}
    async getAll(): Promise<Item[]> {
        const output = []
        const itemsData = await this.connection.execute(`
        select items.id as id, items.name as nome_item, id_items_type as id_tipo_items from items
        left join items_type on items.id_items_type = items_type.id
        `);

        for (const itemData of itemsData) {
            const itemType = new ItemType(
                itemData.id_tipo_items
            )

            const item = new Item(
                itemData.nome_item,
                itemType,
                itemData.id
            )

            output.push(item)
        }
        return output;
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
    
     