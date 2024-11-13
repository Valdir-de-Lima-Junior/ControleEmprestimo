import { LoanRepository } from "../../../domain/repository/loan-repository";
import { GetLoanOutput } from "./get-loan-output";
import { GetLoanInput } from "./get-loan-input";

export class GetLoanUseCase{
   constructor(readonly loanRepository: LoanRepository){}

   async execute(input: GetLoanInput): Promise<GetLoanOutput> {
   const loan = await this.loanRepository.getById(input.id);

   const output: GetLoanOutput = {
      id: loan.getId(),
      item: {
         id: loan.getItem().getId(),
         name: loan.getItem().getName(),
         itemType: loan.getItem().getType()
      },
      loanDate: loan.getLoanDate(),
      returnDate: loan.getReturnDate(),
      person: {
         id: loan.getPerson().getId(),
         name: loan.getPerson().getName(),
      },
      user: {
         id: loan.getUser().getId(),
         userName: loan.getUser().getName(),
      }
   }
      return output;
   }

}