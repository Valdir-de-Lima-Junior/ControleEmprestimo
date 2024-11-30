import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Connection } from "../../database/connection";

export default class ItemRepositoryDatabase implements ItemRepository {
    
    constructor(private connection: Connection) {}
    
    async getAll(): Promise<Item[]> {
        const output = [];
        const itemData = await this.connection.execute(´
        SELECT item.nome AS nome, item.preco AS preco, item.quantidade AS quantidade, item.imagem AS imagem,
        item.descricao AS descricao, item.id AS id, item.categoria_id AS categoria_id
        FROM item
        LEFT JOIN categoria ON item_categoria.categoria_id = categoria.id
        ORDER BY item.id);
    
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
               
    