import { LoanRepository } from "../../../domain/repository/loan-repository";
import { GetLoanOutput } from "./get-loan-output";
import { GetLoanInput } from "./get-loan-input";

export class GetLoanUsecase{
   constructor(readonly loanRepository: LoanRepository){}

   execute(input: GetLoanInput): GetLoanOutput {
   return {};
   }

}