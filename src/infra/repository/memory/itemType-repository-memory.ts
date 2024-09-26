import { ItemType } from "../../../domain/entity/item-type";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";

export class ItemTypeRepositoryMemory implements ItemTypeRepository{
    private types: ItemType[];

    constructor(){
        this.types = [
            new ItemType('Óculos de Proteção','f73ece74-7912-4fd7-b680-234777cfc495'),
            new ItemType('Capacete Grau A', '7858177e-59b3-40f7-ac73-3a9ea5e3fe01')
        ]
    }

    getAll(): ItemType[] {
        throw new Error("Method not implemented.");
    }
    getById(id: string): ItemType {
        const item = this.types.find(valor => valor.getId() == id)

        if (!item) {
            throw new Error("ItemType not Found");
        }

        return item;
    }
    create(item: ItemType): void {
        throw new Error("Method not implemented.");
    }
    update(item: ItemType): void {
        throw new Error("Method not implemented.");
    }

}
    