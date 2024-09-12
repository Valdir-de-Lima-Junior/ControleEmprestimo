import { v4 } from 'uuid';
import { ItemType } from './item-type';
export class Item{
    private name: string;
    private id: string;
    private type: ItemType
    constructor(name: string, type: ItemType, id?: string){
        this.name = name;
        this.type = type;
        if (!id){
            id = v4();
        }
        this.id = id;

    }

    getName():string{
        return this.name;
    }

    getId():string{
        return this.id;
    }

    getType(): ItemType{
        return this.type
    }
}