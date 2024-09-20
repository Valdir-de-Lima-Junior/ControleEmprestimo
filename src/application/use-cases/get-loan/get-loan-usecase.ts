import { LoanRepository } from "../../../domain/repository/loan-repository";
import { GetLoanOutput } from "./get-loan-output";
import { GetLoanInput } from "./get-loan-input";

export class GetLoanUseCase{
   constructor(readonly loanRepository: LoanRepository){}

   execute(input: GetLoanInput): GetLoanOutput {
   return {};
   }

}