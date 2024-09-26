import { Item } from "../../../domain/entity/item";
import { ItemType } from "../../../domain/entity/item-type";
import { ItemRepository } from "../../../domain/repository/item-repository";

export class ItemRepositoryMemory implements ItemRepository{
    private items: Item[];
    constructor(){
        const itemType1 = new ItemType('Óculos', 'c4aea928-87ed-4011-ac8c-655f3aea13d5')
        const itemType2 = new ItemType('Capacete', '00654b90-3f99-45af-8c41-e7f9eb455b3d')
        this.items = [
            new Item('Óculos de Proteção', itemType1, 'f73ece74-7912-4fd7-b680-234777cfc495'),
            new Item('Capacete Grau A', itemType2, '7858177e-59b3-40f7-ac73-3a9ea5e3fe01'),
            new Item('Capacete Grau B', itemType2, 'ba1d9ce3-135e-43bf-871d-fad1dfdb0531')
        ]
     }

    getAll(): Item[] {
        return this.items;
    }
    getById(id: string): Item {
        const item = this.items.find(valor => valor.getId() == id)

        if (!item){
            throw new Error("ItemType not Found");
        }

        return item;
    }
    create(item: Item): void {
        this.items.push(item)
    }
    update(item: Item): void {
        throw new Error("Method not implemented.");
    }
}