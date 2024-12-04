import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Connection } from "../../database/connection";

export default class ItemRepositoryDatabase implements ItemRepository {
    constructor(private connection: Connection) {}

    async getAll(): Promise<Item[]> {
        const output: Item[] = [];
        const itemsData = await this.connection.execute(
            `SELECT id_items_type, id, name FROM items`
        );

        for (const itemData of itemsData) {
            const item = new Item(
                itemData.id_items_type,
                itemData.id,
                itemData.name
            );
            output.push(item);
        }

        return output;
    }

    async getById(id: any): Promise<Item> {
        const [itemData]: any[] = await this.connection.execute(
            `SELECT id_items_type, id, name FROM items WHERE id = :id`,
            [ id ]
        );

        if (!itemData) {
            throw new Error(`Item com o id ${id} não encontrado`);
        }

        return new Item(itemData.id_items_type, itemData.id, itemData.name);
    }

    async create(item: Item): Promise<void> {
        await this.connection.execute(
            `INSERT INTO items (id_items_type, id, name) VALUES ($1, $2, $3)`,
            [item.getType().getId(), item.id, item.name]
        );
    }

    async update(item: Item): Promise<void> {
        await this.connection.execute(
            `UPDATE items SET name = $1, 
                    id_items_type = $2 
                    WHERE id = $3`,
            [ item.name, item.getType().getId(), item.id]
        );
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
  