import { LoanRepository } from "../../../domain/repository/loan-repository";
import { GetLoansInput } from "./get-loans-input";
import { GetLoansOutput } from "./get-loans-output";

export class GetLoansUseCase{
    constructor(readonly loanRepository: LoanRepository){}

    execute(input: GetLoansInput): GetLoansOutput {
        return {};
    }
}