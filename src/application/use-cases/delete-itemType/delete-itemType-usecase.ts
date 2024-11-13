import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { DeleteItemTypeInput } from "./delete-itemType-input";
import { DeleteItemTypeOutput } from "./delete-itemType-output";

export class DeleteItemTypeUseCase {
    constructor(readonly itemTypeRepository: ItemTypeRepository){

    }
    execute(input: DeleteItemTypeInput): DeleteItemTypeOutput {
        this.itemTypeRepository.delete(input.id)
        return {};
    }
    
}