import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateItemTypeUseCase } from "../use-cases/create-itemType/create-itemType-usecase";
import { DeleteItemTypeUseCase } from "../use-cases/delete-itemType/delete-itemType-usecase";
import { GetItemsTypeUseCase } from "../use-cases/get-itemsType/get-itemsType-usecase";
import { UpdateItemTypeUseCase } from "../use-cases/update-itemType/update-itemType-usecase";
import { GetItemTypeUseCase } from "../use-cases/get-itemType/get-itemType-usecase";
import { ItemTypeRepository } from "../../domain/repository/item-type-repository";
import { UpdateItemTypeInput } from "../use-cases/update-itemType/update-itemType-input";

export class itemTypeController{
    constructor(private repositoryFactory: RepositoryFactory,
        private readonly itemTypeRepository: ItemTypeRepository
    ){}
    
    async getAll(input: any){
        const getItemsType = new GetItemsTypeUseCase(this.itemTypeRepository);
        return await getItemsType.execute(input);
    }
    
    async getById(id: string) {
        try{
            const getItemTypeUseCase = new GetItemTypeUseCase(this.itemTypeRepository);
            return await getItemTypeUseCase.execute({id});
        } catch (e: any) {
            return {
                message: e.message
            }
        }
    }    

    async create(input: any) {
        try{
            const createItemTypeUseCase = new CreateItemTypeUseCase(this.repositoryFactory);
            return await createItemTypeUseCase.execute(input);
        } catch (e: any) {
            return{
                message: e.message
            }
        }
        
    }

    update(input: UpdateItemTypeInput) {
        const updateItemTypeUseCase = new UpdateItemTypeUseCase(this.itemTypeRepository);
        return updateItemTypeUseCase.execute(input);
    }

    delete(id: string){
        const deleteItemTypeUseCase = new DeleteItemTypeUseCase(this.itemTypeRepository);
        return deleteItemTypeUseCase.execute({id})
    } catch (e: any){
        return {
            message: e.message
        }
    }

}