
import { CreateItemTypeOutput } from "./create-itemType-output";
import { CreateItemTypeInput } from "./create-itemType-input";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";

export class CreateItemTypeUseCase{
    constructor(readonly itemTypeRepository: ItemTypeRepository){}
    
    execute(input: CreateItemTypeInput): CreateItemTypeOutput {
        return {};
    }

}