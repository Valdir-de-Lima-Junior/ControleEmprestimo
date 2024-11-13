import { ItemType } from "../../../domain/entity/item-type";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { UpdateItemTypeInput } from "./update-itemType-input";
import { UpdateItemTypeOutput } from "./update-itemType-output";

export class UpdateItemTypeUseCase {
    
    constructor(private readonly itemTypeRepository: ItemTypeRepository)
    {}

    async execute(input: UpdateItemTypeInput): Promise<UpdateItemTypeOutput> {
        const itemType = await this.itemTypeRepository.getById(input.id)
        const newItemType = new ItemType(input.name, itemType.getId());
        this.itemTypeRepository.update(newItemType)

        return {id: itemType.getId()};
    }
    
}