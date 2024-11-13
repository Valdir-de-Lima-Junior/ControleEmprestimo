import { v4 } from 'uuid';
import { Person } from './person';
export class User{

    private userName: string;
    private id?: string;
    private password?: string;
    private person: Person;

    constructor(userName: string,  person: Person, password?: string, id?: string){
        if (!id) {
            id = v4();
        };
        this.id = id;
        this.userName = userName;
        if(!password){
            password = '123'
        }
        this.password = password;
        this.person = person;
    }

    getName():string{
        return this.userName;
    }

    getId():string | undefined{
        return this.id;
    }

    getPassword():string | undefined{
        return this.password;
    }

    getPerson():Person{
        return this.person;
    }
}