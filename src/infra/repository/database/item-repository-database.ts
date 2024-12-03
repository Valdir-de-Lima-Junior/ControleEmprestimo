import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Connection } from "../../database/connection";

export default class ItemRepositoryDatabase implements ItemRepository {
    constructor(private connection: Connection) {}

    async getAll(): Promise<Item[]> {
        const output: Item[] = [];
        const itemsData = await this.connection.execute(
            'SELECT id_items_type, id, name FROM items'
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
            'SELECT id_items_type, id, name FROM items WHERE id = :id',
            { id }
        );

        if (!itemData) {
            throw new Error(`Item com o id ${id} não encontrado`);
        }

        return new Item(itemData.id_items_type, itemData.id, itemData.name);
    }

    async create(item: any): Promise<void> {
        const { id_items_type, id, name } = item;
        await this.connection.execute(
            'INSERT INTO items (id_items_type, id, name) VALUES (:id_items_type, :id, :name)',
            { id_items_type, id, name }
        );
    }

    async update(item: any): Promise<void> {
        const { id_items_type, id, name } = item;
        const result = await this.connection.execute(
            'UPDATE items SET id_items_type = :id_items_type, name = :name WHERE id = :id',
            { id_items_type, id, name }
        );

        if (result.affectedRows === 0) {
            throw new Error(`Item com o id ${id} não encontrado`);
        }
    }

    async delete(id: any): Promise<void> {
        const result = await this.connection.execute(
            'DELETE FROM items WHERE id = :id',
            { id }
        );

        if (result.affectedRows === 0) {
            throw new Error(`Item com o id ${id} não encontrado`);
        }
    }
}
  