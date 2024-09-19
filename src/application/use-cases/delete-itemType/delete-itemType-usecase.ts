import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { DeleteItemTypeInput } from "./delete-itemType-input";
import { DeleteItemTypeOutput } from "./delete-itemType-output";

export class DeleteItemUseCase {
    constructor(readonly itemTypeRepository: ItemTypeRepository){

    }
    execute(input: DeleteItemTypeInput): DeleteItemTypeOutput{
        return {};
    }
    
}