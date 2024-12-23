import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItemsInput } from "./get-items-input";
import { GetItemsOutput } from "./get-items-output";

export class GetItemsUseCase{
    constructor(readonly itemRepository: ItemRepository){}

    async execute(input: GetItemsInput): Promise<GetItemsOutput[]> {
        const itemList = await this.itemRepository.getAll();

        const output: GetItemsOutput[] = [];

        for (const item of itemList){
            output.push(
                {
                    id: item.getId(),
                    name: item.getName(),

                    itemType: {
                        id: item.getType().getId(),
                        name: item.getType().getName()
                    }
                }
            )
        }

        return output;
    }
}