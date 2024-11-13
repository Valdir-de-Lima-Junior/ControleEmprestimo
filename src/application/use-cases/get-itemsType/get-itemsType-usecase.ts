import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { GetItemsTypeInput } from "./get-itemsType-input";
import { GetItemsTypeOutput } from "./get-itemsType-output";

export class GetItemsTypeUseCase{

    constructor(readonly itemTypeRepository: ItemTypeRepository){}

    async execute(input: GetItemsTypeInput): Promise<GetItemsTypeOutput[]> {
        const itemTypeList = await this.itemTypeRepository.getAll();

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