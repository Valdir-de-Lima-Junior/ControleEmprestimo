import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { GetItemTypeInput } from "./get-itemType-input";
import { GetItemTypeOutput } from "./get-itemType-output";

export class GetItemTypeUseCase{
    constructor(readonly itemTypeRepository: ItemTypeRepository){}

    async execute(input: GetItemTypeInput): Promise<GetItemTypeOutput> {
        const itemType = await this.itemTypeRepository.getById(input.id);
        
        const output: GetItemTypeOutput = {
            id: itemType.getId(),
            name: itemType.getName(),
        }
        return output;
    }
}