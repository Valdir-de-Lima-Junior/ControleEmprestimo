import { Item } from "../../../domain/entity/item";
import { ItemType } from "../../../domain/entity/item-type";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Connection } from "../../database/connection";

export default class ItemRepositoryDatabase implements ItemRepository {
    constructor(private connection: Connection) {}
<<<<<<< HEAD
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
=======

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
>>>>>>> 7f752654c82fd439aabc62ad32708439947ddc2b
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
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
<<<<<<< HEAD
     
=======
    async getAll(): Promise<Item[]> {
        const output = [];
        const itemData = await this.connection.execute(`
        SELECT item.nome AS nome, Item.preco AS preco, Item.quantidade AS quantidade, Item.imagem AS imagem,
        Item.descricao AS descricao, Item.id AS id, Item.categoria_id AS categoria_id
        FROM item
        LEFT JOIN categoria ON item_categoria.categoria_id = categoria.id
        ORDER BY Item.id `);
        
    
        for (const item of itemData) {
        const itemEntity = new Item(
            item.nome,
            item.preco,
            item.quantidade,
            item.imagem,
            item.descricao,
            item.id,
            item.categoria_id
            );
           
            const item = new Item(
                itemEntity.nome,
                itemEntity.preco,
                itemEntity.quantidade,
                itemEntity.imagem,
                itemEntity.descricao,
                itemEntity.id,
                itemEntity.categoria_id
                );
               
            }
        }
>>>>>>> 7f752654c82fd439aabc62ad32708439947ddc2b
