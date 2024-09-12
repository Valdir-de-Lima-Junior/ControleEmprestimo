import { v4 } from 'uuid';
import { Person } from './person';
export class User{

    private userName: string;
    private id: string;
    private password: string;
    private person: Person;

    constructor(userName: string, password: string, person: Person, id?: string){
        this.userName = userName;
        this.password = password;
        if (!id){
            id = v4();
        }
        this.id = id;
        this.person = person;
    }

    getName():string{
        return this.userName;
    }

    getId():string{
        return this.id;
    }

    getSenha():string{
        return this.password;
    }

    getPerson():Person{
        return this.person;
    }
}