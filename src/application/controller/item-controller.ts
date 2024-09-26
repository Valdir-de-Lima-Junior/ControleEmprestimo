import { ItemRepository } from "../../domain/repository/item-repository";
import { ItemTypeRepository } from "../../domain/repository/item-type-repository";
import { CreateItemUseCase } from "../use-cases/create-item/create-item-usecase";
import { DeleteItemUseCase } from "../use-cases/delete-item/delete-item-usecase";
import { GetItemUseCase } from "../use-cases/get-item/get-item-usecase";
import { GetItemsUseCase } from "../use-cases/get-items/get-items-usecase";
import { UpdateItemUseCase } from "../use-cases/update-item/update-item-usecase";

export class ItemController{
    constructor(
        private readonly itemRepository: ItemRepository,
        private readonly itemTypeRepository: ItemTypeRepository
    ){}

    create(input: any){
        const createItemUseCase = new CreateItemUseCase(this.itemRepository, this.itemTypeRepository);
        return createItemUseCase.execute(input);
    }

    update(input: any){
        const updateItemUseCase = new UpdateItemUseCase(this.itemRepository);
        updateItemUseCase.execute(input);
    }

    getByID(input: any){
        const getItemUseCase = new GetItemUseCase(this.itemRepository);
        return getItemUseCase.execute(input);
    }

    
    getAll(input: any){
        const getItemsUseCase = new GetItemsUseCase(this.itemRepository);
        return getItemsUseCase.execute(input);
    }

    delete(input: any){
        const deleteItemUseCase = new DeleteItemUseCase(this.itemRepository);
        deleteItemUseCase.execute(input);
    }
}