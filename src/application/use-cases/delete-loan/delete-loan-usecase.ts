import { LoanRepository } from "../../../domain/repository/loan-repository";
import { DeleteLoanInput } from "./delete-loan-input";
import { DeleteLoanOutput } from "./delete-loan-output";

export class DeleteLoanUseCase {
    constructor(readonly loanRepository: LoanRepository){

    }
    execute(input: DeleteLoanInput): DeleteLoanOutput{
        return {};
    }
    
}