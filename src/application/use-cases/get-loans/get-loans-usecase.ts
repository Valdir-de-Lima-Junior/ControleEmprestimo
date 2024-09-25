import { LoanRepository } from "../../../domain/repository/loan-repository";
import { GetLoansInput } from "./get-loans-input";
import { GetLoansOutput } from "./get-loans-output";

export class GetLoansUseCase{
    constructor(readonly loanRepository: LoanRepository){}

    execute(input: GetLoansInput): GetLoansOutput[] {
        const loanList = this.loanRepository.getAll();

        const output: GetLoansOutput[] = [];

        for(const loan of loanList){
            output.push(
                {
                    id: loan.getId(),
                    item: {
                        id: loan.getItem().getId(),
                        name: loan.getItem().getName(),
                    },
                    itemType: {
                        id: loan.getItemType().getId(),
                        name: loan.getItemType().getName()
                    },
                    person: {
                        id: loan.getPerson().getId(),
                        name: loan.getPerson().getName()
                    },
                    user: {
                        id: loan.getUser().getId(),
                        name: loan.getUser().getName()
                    }
                }
            )
        }
        
        return output;
    }
}