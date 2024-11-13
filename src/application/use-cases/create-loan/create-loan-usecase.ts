import { Loan } from "../../../domain/entity/loan";
import { LoanRepository } from "../../../domain/repository/loan-repository";
import { CreateLoanInput } from "./create-loan-input";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { PersonRepository } from "../../../domain/repository/person-repository";
import { UserRepository } from "../../../domain/repository/user-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { ItemTypeRepository } from "../../../domain/repository/item-type-repository";

export class CreateLoanUseCase{
   private itemRepository: ItemRepository;
   private itemTypeRepository: ItemTypeRepository;
   private personRepository: PersonRepository;
   private userRepository: UserRepository;
   private loanRepository: LoanRepository;

   constructor(private repositoryFactory: RepositoryFactory)
   {
      this.itemRepository = repositoryFactory.createItemRepository();
      this.personRepository = repositoryFactory.createPersonRepository();
      this.userRepository = repositoryFactory.createUserRepository();
      this.loanRepository = repositoryFactory.createLoanRepository();
      this.itemTypeRepository = repositoryFactory.createItemTypeRepository();
   }

   async execute(input: CreateLoanInput) {
      if (!input.personId) {
         throw new Error('Pessoa não informada');
      }
      if (!input.userId) {
         throw new Error('Nome do Usuário não informada');
      }
      if (!input.itemId) {
         throw new Error('Item não informada');
      }
      if (!input.dateLoan) {
         throw new Error('Data de Empréstimo não informada');
      }

      const item = await this.itemRepository.getById(input.itemId);
      const person = await this.personRepository.getById(input.personId);
      const user = await this.userRepository.getById(input.userId);
      
      const loan = new Loan(item, person, user, input.dateLoan)
      await this.loanRepository.create(loan);
      
   return {};
   }

}