import { ItemType } from "../../../domain/entity/item-type";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { Connection } from "../../database/connection";

export default class ItemTypeRepositoryDatabase implements ItemTypeRepository{
    constructor(private connection: Connection){}
 
    async  getAll(): Promise<ItemType[]> {
        const output = [];
        const ItemType = await this.connection.getRepository(ItemType).execute(´
        SELECT ItemType.nome AS nome, ItemType.id AS id 
        FROM ItemType
        LEFT JOIN Item ON Item.idItemType = ItemType.id
        ´);
    
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
    