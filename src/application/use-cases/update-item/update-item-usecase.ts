import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { UpdateItemInput } from "./update-item-input";
import { UpdateItemOutput } from "./update-item-output";

export class UpdateItemUseCase {

    constructor(
        private itemRepository: ItemRepository,
        private itemTypeRepository: ItemTypeRepository
    ){};

    async execute(input: UpdateItemInput): Promise<UpdateItemOutput> {
        const item = await this.itemRepository.getById(input.id);
        const itemType = await this.itemTypeRepository.getById(input.itemTypeId);

        const newItem = new Item(input.name, itemType, item.getId())

        this.itemRepository.update(newItem)

        return {id: item.getId()};
    }
    
}