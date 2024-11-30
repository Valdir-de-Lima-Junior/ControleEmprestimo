import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Connection } from "../../database/connection";

export default class ItemRepositoryDatabase implements ItemRepository {
    
    constructor(private connection: Connection) {}
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