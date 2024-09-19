import { LoanRepository } from "../../../domain/repository/loan-repository";
import { CreateLoanOutput } from "./create-loan-output";
import { CreateLoanInput } from "./create-loan-input";

export class CreateLoanUsecase{
   constructor(readonly loanRepository: LoanRepository){}

   execute(input: CreateLoanInput): CreateLoanOutput {
   return {};
   }

}