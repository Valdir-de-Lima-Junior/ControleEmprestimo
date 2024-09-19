import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { GetItemTypeInput } from "./get-itemType-input";
import { GetItemTypeOutput } from "./get-itemType-output";

export class GetItemUseCase{
    constructor(readonly itemTypeRepository: ItemTypeRepository){}

    execute(input: GetItemTypeInput): GetItemTypeOutput {
        return {};
    }
}