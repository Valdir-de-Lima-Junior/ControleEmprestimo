import { Item } from "../../../domain/entity/item";
import { ItemType } from "../../../domain/entity/item-type";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { Connection } from "../../database/connection";

export default class ItemTypeRepositoryDatabase implements ItemTypeRepository{
    constructor(private connection: Connection){}
    getById(id: string): Promise<ItemType> {
        throw new Error("Method not implemented.");
    }
    create(item: ItemType): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(item: ItemType): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
 
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
        }
      }