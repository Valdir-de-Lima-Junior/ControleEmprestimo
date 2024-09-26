import { ItemTypeRepository } from "../../domain/repository/item-type-repository";
import { CreateItemTypeUseCase } from "../use-cases/create-itemType/create-itemType-usecase";
import { DeleteItemTypeUseCase } from "../use-cases/delete-itemType/delete-itemType-usecase";
import { GetItemTypeUseCase } from "../use-cases/get-itemType/get-itemType-usecase";
import { UpdateItemTypeUseCase } from "../use-cases/update-itemType/update-itemType-usecase";

export class itemTypeController{
    constructor(private readonly itemTypeRepository: ItemTypeRepository){}

create(input: any){
    const createItemTypeUseCase = new CreateItemTypeUseCase(this.itemTypeRepository);
    createItemTypeUseCase.execute(input);
}

update(input: any){
    const updateItemTypeUseCase = new UpdateItemTypeUseCase(this.itemTypeRepository);
    updateItemTypeUseCase.execute(input);
}

getByID(input: any){
   const getItemTypeUseCase = new GetItemTypeUseCase(this.itemTypeRepository);
   getItemTypeUseCase.execute(input);
}


delete(input: any){
    const deleteItemTypeUseCase = new DeleteItemTypeUseCase(this.itemTypeRepository);
    deleteItemTypeUseCase.execute(input); 
}

}