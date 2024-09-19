import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { GetItemsTypeInput } from "./get-itemsType-input";
import { GetItemsTypeOutput } from "./get-itemsType-output";

export class GetItemsUseCase{
    constructor(readonly itemTypeRepository: ItemTypeRepository){}

    execute(input: GetItemsTypeInput): GetItemsTypeOutput{
        return {};
    }
}