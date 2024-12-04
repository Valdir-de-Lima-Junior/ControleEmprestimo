import { ItemType } from "../../../domain/entity/item-type";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { Connection } from "../../database/connection";


export default class ItemTypeRepositoryDatabase implements ItemTypeRepository {
    constructor(private connection: Connection) {}

    async getAll(): Promise<ItemType[]> {
        const output = [];
        const itemsTypeData = await this.connection.execute(
            `SELECT id, name FROM items_type`
        );

        for (const itemTypeData of itemsTypeData) {
            const item = new ItemType(
                itemTypeData.id,
                itemTypeData.name
            );
            output.push(item);
        }

        return output;
    }

    async getById(id: string): Promise<ItemType> {
        const [itemData] = await this.connection.execute(
            `SELECT id, name FROM items_type WHERE id = $1`,
            [ id ]
        );

        if (!itemData) {
            throw new Error(`Item Type não encontrado`);
        }

        return new ItemType(itemData.id, itemData.name);
    }

    async create(itemType: ItemType): Promise<void> {
        await this.connection.execute(
            `INSERT INTO items_type (id, name) VALUES ($1, $2)`,
            [itemType.getId(), itemType.getName()]
        );
    }

    async update(itemType: ItemType): Promise<void> {
        await this.connection.execute(
            `UPDATE items_type SET name = $1 WHERE id = $2`,
            [itemType.getName(), itemType.getId()]
        );
    }

    async delete(id: string): Promise<void> {
        const [ itemTypeData ] = await this.connection.execute(
            'DELETE FROM items_type WHERE id = $1',
            [ id ]
        );

    }
 

    // async delete(id: string): Promise<void> {
    //     const [ itemTypeData ] = await this.connection.execute(`
    //         DELETE FROM tipos_item
    //         WHERE id = $1`,
    //         [id]);
    // }

}