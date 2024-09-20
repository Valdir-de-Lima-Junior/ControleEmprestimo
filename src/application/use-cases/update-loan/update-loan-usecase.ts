import { LoanRepository } from "../../../domain/repository/loan-repository";
import { UpdateLoanOutput } from "./update-loan-output";
import { UpdateLoanInput } from "./update-loan-input";

export class UpdateLoanUseCase{
   constructor(readonly loanRepository: LoanRepository){}

   execute(input: UpdateLoanInput): UpdateLoanOutput {
   return {};
   }

}