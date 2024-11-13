import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { CreateItemInput } from "./create-item-input";
import { CreateItemOutput } from "./create-item-output";

export class CreateItemUseCase{
    private itemRepository: ItemRepository;
    private itemTypeRepository: ItemTypeRepository;
    constructor(private repositoryFactory: RepositoryFactory){
        this.itemRepository = repositoryFactory.createItemRepository();
        this.itemTypeRepository = repositoryFactory.createItemTypeRepository();
    }
    
    async execute(input: CreateItemInput) {
        if(!input.id) {
            throw new Error ('Código do Item não informado')
        }
        
        if(!input.name) {
            throw new Error ('Nome do Item não informado')
        }

        if(!input.itemTypeId) {
            throw new Error ('Tipo Item não informado')
        }

        const itemType = await this.itemTypeRepository.getById(input.itemTypeId);
        
        const item = new Item(input.name, itemType, input.id)
        await this.itemRepository.create(item);

        return{};
    }
}