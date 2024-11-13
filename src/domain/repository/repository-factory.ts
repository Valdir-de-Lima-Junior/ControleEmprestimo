import { ItemRepository } from "./item-repository"
import { ItemTypeRepository } from "./item-type-repository"
import { LoanRepository } from "./loan-repository"
import { PersonRepository } from "./person-repository"
import { UserRepository } from "./user-repository"


export interface RepositoryFactory {
    createItemRepository(): ItemRepository;
    createItemTypeRepository(): ItemTypeRepository;
    createPersonRepository(): PersonRepository;
    createUserRepository(): UserRepository;
    createLoanRepository(): LoanRepository;
}