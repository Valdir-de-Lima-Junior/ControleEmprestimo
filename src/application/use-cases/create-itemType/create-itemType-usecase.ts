import { ItemRepository } from "../../../domain/repository/item-repository";
import { CreateItemTypeOutput } from "./create-itemType-output";
import { CreateItemTypeInput } from "./create-itemType-input";

export class CreateItemTypeUseCase{
    constructor(readonly itemRepository: ItemRepository){}
    
    execute(input: CreateItemTypeInput): CreateItemTypeOutput {
        return {};
    }

}