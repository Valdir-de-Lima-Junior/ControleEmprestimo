import { ItemType } from "../../../domain/entity/item-type";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { CreateItemTypeInput } from "./create-itemType-input";

export class CreateItemTypeUseCase{
    private itemTypeRepository: ItemTypeRepository;
    constructor(private repositoryFactory: RepositoryFactory)
    {
        this.itemTypeRepository = repositoryFactory.createItemTypeRepository();
    }
    
    async execute(input: CreateItemTypeInput) {

        if(!input.id) {
            throw new Error ('Código do Tipo de Item não informado')
        }
        
        if(!input.name) {
            throw new Error ('Nome do Tipo de Item não informado')
        }
        
        const itemType = new ItemType(input.name, input.id)

        await this.itemTypeRepository.create(itemType);
        
        return {};
    }

}