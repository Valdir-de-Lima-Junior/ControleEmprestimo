import { v4 } from 'uuid';
import { Item } from './item';
import { Person } from './person';
import { User } from './user';

export class Loan{
    private id?: string;
    private person: Person;
    private user: User;
    private item: Item;
    private loanDate?: Date;
    private returnDate?: Date;
    
    constructor(item: Item, person: Person, user:User, loanDate?: Date, id?: string, returnDate?: Date ){
        this.item = item; 
        this.person = person; 
        this.user = user;
        this.loanDate = loanDate; 
        this.returnDate = returnDate; 
        if (!id){
            id = v4();
        }
        this.id = id;
        
    }

    getItem(): Item{
        return this.item;
    }

    getPerson(): Person{
        return this.person
    }

    getUser(): User{
        return this.user
    }

    getLoanDate(): Date | undefined{
        return this.loanDate
    }

    getReturnDate(): Date | undefined{
        return this.returnDate
    }

    getId():string | undefined{
        return this.id;
    }

}