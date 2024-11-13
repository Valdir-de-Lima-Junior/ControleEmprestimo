import { ItemRepository } from "../../domain/repository/item-repository";
import { ItemTypeRepository } from "../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateItemUseCase } from "../use-cases/create-item/create-item-usecase";
import { DeleteItemUseCase } from "../use-cases/delete-item/delete-item-usecase";
import { GetItemUseCase } from "../use-cases/get-item/get-item-usecase";
import { GetItemsUseCase } from "../use-cases/get-items/get-items-usecase";
import { UpdateItemInput } from "../use-cases/update-item/update-item-input";
import { UpdateItemUseCase } from "../use-cases/update-item/update-item-usecase";


export class ItemController{
    constructor(private repositoryFactory: RepositoryFactory,
        private readonly itemRepository: ItemRepository,
        private readonly itemTypeRepository: ItemTypeRepository
    ){}
    
    async getAll(input: any){
        const getItems = new GetItemsUseCase(this.itemRepository);
        return await getItems.execute(input);
    }
    
    async getByID(id: string){
        try {
            const getItem = new GetItemUseCase(this.itemRepository);
            return await getItem.execute({id});
        } catch (e: any){
            return {
                message: e.message
            }
        }
    }

    async create(input: any){
        try{
            const createItem = new CreateItemUseCase(this.repositoryFactory);
            return await createItem.execute(input);
        } catch (e: any) {
            return{
            message: e.message
        }
    }
    }

    update(input: UpdateItemInput){
        const updateItemUseCase = new UpdateItemUseCase(
            this.itemRepository,
            this.itemTypeRepository
        );
        return updateItemUseCase.execute(input);
    }

    delete(id: string){
        try{
            const deleteItem = new DeleteItemUseCase(this.itemRepository);
            return deleteItem.execute({id});
        } catch (e: any){
            return {
                message: e.message
            }
        }
    }
}