import { Item } from "../../../domain/entity/item";
import { ItemType } from "../../../domain/entity/item-type";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Connection } from "../../database/connection";

export default class ItemRepositoryDatabase implements ItemRepository {
    
    constructor(private connection: Connection) {}
    async getAll(): Promise<Item[]> {
        const output = []
        const itemsData = await this.connection.execute(`
        SELECT items.id as id, items.name as nome_item, id_items_type as id_item_type, name_item_type as itemType_name FROM items
        LEFT JOIN items_type on items.id_items_type = items_type.id
        `);

        for (const itemData of itemsData) {
            const itemType = new ItemType(
                itemData.id_tipo_items,
                itemData.nome_tipo_item
            );

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
        const [ itemData ] = await this.connection.execute(`
            SELECT i.id, i.name, it.id as items_type.id, it.name as items_type.name
            `)
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
    
     