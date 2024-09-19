import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItemsInput } from "./get-items-input";
import { GetItemsOutput } from "./get-items-output";

export class GetItemsUseCase{
    constructor(readonly itemRepository: ItemRepository){}

    execute(input: GetItemsInput): GetItemsOutput {
        return {
            name: ''
        };
    }
}