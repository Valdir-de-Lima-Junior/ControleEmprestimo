import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItemsInput } from "./get-item-input";
import { GetItemsOutput } from "./get-tems-output";

export class GetItemsUseCase{
    constructor(readonly itemRepository: ItemRepository){}

    execute(input: GetItemsInput): GetItemsOutput {
        return {
            name: ''
        };
    }
}