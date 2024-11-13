import { v4 } from 'uuid';
export class ItemType{
    private name: string;
    private id?: string;
    constructor(name: string, id?: string){
        this.name = name;
        if (!id){
            id = v4();
        }
        this.id = id;

    }

    getId():string | undefined{
        return this.id;
    }

    getName():string{
        return this.name;
    }

}