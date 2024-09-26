import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { CreateItemInput } from "./create-item-input";
import { CreateItemOutput } from "./create-item-output";

export class CreateItemUseCase{
    constructor(
        readonly itemRepository: ItemRepository,
        readonly itemTypeRepository: ItemTypeRepository
    ){}
    
    execute(input: CreateItemInput): CreateItemOutput {
        const itemType = this. itemTypeRepository.getById(input.itemTypeId);
        
        const item = new Item(input.name, itemType)
    }
}