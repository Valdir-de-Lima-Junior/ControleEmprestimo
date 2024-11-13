import { Loan } from "../../../domain/entity/loan";
import { LoanRepository } from "../../../domain/repository/loan-repository";
import { UpdateLoanOutput } from "./update-loan-output";
import { UpdateLoanInput } from "./update-loan-input";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { PersonRepository } from "../../../domain/repository/person-repository";
import { UserRepository } from "../../../domain/repository/user-repository";

export class UpdateLoanUseCase{

   constructor(
      private readonly itemRepository: ItemRepository,
      private readonly personRepository: PersonRepository,
      private readonly userRespository: UserRepository,
      private readonly loanRepository: LoanRepository,
   ){}

   async execute(input: UpdateLoanInput): Promise<UpdateLoanOutput> {
      const item = await this.itemRepository.getById(input.itemId);
      const person = await this.personRepository.getById(input.personId);
      const user = await this.userRespository.getById(input.userId);
      const loan = await this.loanRepository.getById(input.id)

      const newLoan = new Loan(item, person, user, input.loanDate, input.id)
      
      this.loanRepository.update(newLoan)
      return {id: loan.getId()};
   }

}