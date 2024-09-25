import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItemInput } from "./get-item-input";
import { GetItemOutput } from "./get-item-output";

export class GetItemUseCase{
    constructor(readonly itemRepository: ItemRepository){}

    execute(input: GetItemInput): GetItemOutput {
        const item = this.itemRepository.getById(input.id);
        
        const output: GetItemOutput = {
            id: item.getId(),
            name: item.getName(),
            itemType: {
                id: item.getType().getId(),
                name: item.getType().getName(),
            }
        }

        return output;
    }
}