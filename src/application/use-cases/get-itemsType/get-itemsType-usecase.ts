import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { GetItemsTypeInput } from "./get-itemsType-input";
import { GetItemsTypeOutput } from "./get-itemsType-output";

export class GetItemsUseCase{
    constructor(readonly itemTypeRepository: ItemTypeRepository){}

    execute(input: GetItemsTypeInput): GetItemsTypeOutput[] {
        const itemTypeList = this.itemTypeRepository.getAll();

        const output: GetItemsTypeOutput[] = [];

        for(const itemType of itemTypeList){
            output.push(
                {
                    id: itemType.getId(),
                    name: itemType.getName(),
                }
            )
        }

        return output;
    }
}