import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { UpdateItemTypeInput } from "./update-itemType-input";
import { UpdateItemTypeOutput } from "./update-itemType-output";

export class UpdateItemTypeUseCase {
    constructor(readonly itemTypeRepository: ItemTypeRepository){

    }
    execute(input: UpdateItemTypeInput): UpdateItemTypeOutput{
        return {};
    }
    
}