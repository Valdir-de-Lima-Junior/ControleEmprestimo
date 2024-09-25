import { v4 } from 'uuid';
import { Item } from './item';
import { Person } from './person';
import { User } from './user';
import { ItemType } from './item-type';

export class Loan{
    private id: string;
    private person: Person;
    private user: User;
    private item: Item;
    private itemType: ItemType;
    private loanDate: Date;
    private returnDate?: Date;
    
    constructor(item: Item, itemType: ItemType,person: Person, user:User, loanDate: Date, returnDate?: Date, id?: string, ){
        this.item = item; 
        this.itemType = itemType;
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

    getItemType(): ItemType{
        return this.itemType;
    }

    getPerson(): Person{
        return this.person
    }

    getUser(): User{
        return this.user
    }

    getLoanDate(): Date{
        return this.loanDate
    }

    getReturnDate(): Date | undefined{
        return this.returnDate
    }

    getId():string{
        return this.id;
    }

}