import { ItemRepository } from "../../domain/repository/item-repository";
import { ItemTypeRepository } from "../../domain/repository/item-type-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { Connection } from "./connection";
import { LoanRepository } from "../../domain/repository/loan-repository";
import { PersonRepository } from "../../domain/repository/person-repository";
import { UserRepository } from "../../domain/repository/user-repository";
import LoanRepositoryDatabase from "../repository/database/loan-repository-database";
import UserRepositoryDatabase from "../repository/database/user-repository-database";
import PersonRepositoryDatabase from "../repository/database/person-repository-database";
import ItemTypeRepositoryDatabase from "../repository/database/itemType-repository-database";
import ItemRepositoryDatabase from "../repository/database/item-repository-database";

export class DatabaseRepositoryFactory implements RepositoryFactory{
    constructor(private connection: Connection){}
    
    createItemRepository(): ItemRepository {
        return new ItemRepositoryDatabase(this.connection)
    }

    createItemTypeRepository(): ItemTypeRepository {
        return new ItemTypeRepositoryDatabase(this.connection)
    }
    
    createPersonRepository(): PersonRepository {
        return new PersonRepositoryDatabase(this.connection);
    }
    
    createUserRepository(): UserRepository {
        return new UserRepositoryDatabase(this.connection)
    }
    
    createLoanRepository(): LoanRepository {
        return new LoanRepositoryDatabase(this.connection);
    }
    
}