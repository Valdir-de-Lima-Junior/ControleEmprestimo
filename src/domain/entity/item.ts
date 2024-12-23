import { v4 } from 'uuid';
import { ItemType } from './item-type';
export class Item{
    readonly id: string;
    private type: ItemType;
    constructor(readonly name: string, type: ItemType, id?: string){
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

    getId():string | undefined{
        return this.id;
    }

    getType(): ItemType{
        return this.type
    }
}
