import { v4 } from 'uuid';
export class Person{
    private id?: string | undefined; 
    private name: string;
    private document: string;

    constructor(name: string, document:string, id?: string){
        if (!id){
            id = v4();
        }
        this.id = id;
        this.name = name;
        this.document = document;
    }

    getId():string | undefined{
        return this.id;
    }

    getName():string{
        return this.name;
    }

    getDocument(): string{
        return this.document;
    }
}