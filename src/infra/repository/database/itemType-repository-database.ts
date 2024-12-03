import { Item } from "../../../domain/entity/item";
import { ItemType } from "../../../domain/entity/item-type";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { Connection } from "../../database/connection";


export default class ItemTypeRepositoryDatabase implements ItemTypeRepository {
    constructor(private connection: Connection) {}

    async getAll(): Promise<ItemType[]> {
        const output: ItemType[] = [];
        const itemsData = await this.connection.execute(
            'SELECT id, name FROM items_type'
        );

        for (const itemData of itemsData) {
            const item = new ItemType(
                itemData.id,
                itemData.name
            );
            output.push(item);
        }

        return output;
    }

    async getById(id: any): Promise<ItemType> {
        const [itemData]: any[] = await this.connection.execute(
            'SELECT id, name FROM items_type WHERE id = :id',
            { id }
        );

        if (!itemData) {
            throw new Error(`Item com o id ${id} não encontrado`);
        }

        return new ItemType(itemData.id, itemData.name);
    }

    async create(item: any): Promise<void> {
        const { id, name } = item;
        await this.connection.execute(
            'INSERT INTO items_type (id, name) VALUES (:id, :name)',
            { id, name }
        );
    }

    async update(item: any): Promise<void> {
        const { id, name } = item;
        const result = await this.connection.execute(
            'UPDATE items_type SET name = :name WHERE id = :id',
            { id, name }
        );

        if (result.affectedRows === 0) {
            throw new Error(`Item com o id ${id} não encontrado`);
        }
    }

    async delete(id: any): Promise<void> {
        const result = await this.connection.execute(
            'DELETE FROM items_type WHERE id = :id',
            { id }
        );

        if (result.affectedRows === 0) {
            throw new Error(`Item com o id ${id} não encontrado`);
        }
    }
 
    async  getAll(): Promise<ItemType[]> {
        const output = [];
        const ItemType = await this.connection.getRepository(ItemType).execute(`
        SELECT ItemType.nome AS nome, ItemType.id AS id 
        FROM ItemType
        LEFT JOIN Item ON Item.idItemType = ItemType.id
        `);
        
        for(const item of ItemType){
        const itemOutput = new ItemType(
            item.id,
            item.nome
            );
    
        const itemOutput2 = new Item(
            item.id,
            item.nome,
            item.idItemType
            );
        }
      }
    }