import { LoanRepository } from "../../../domain/repository/loan-repository";
import { GetLoansInput } from "./get-loans-input";
import { GetLoansOutput } from "./get-loans-output";

export class GetLoansUseCase{
    constructor(readonly loanRepository: LoanRepository){}

    async execute(input: GetLoansInput): Promise<GetLoansOutput[]> {
        const loanList = await this.loanRepository.getAll();

        const output: GetLoansOutput[] = [];

        for(const loan of loanList){
            output.push(
                {
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
                        name: loan.getPerson().getName()
                    },
                    user: {
                        id: loan.getUser().getId(),
                        userName: loan.getUser().getName()
                    }
                }    
            )
        }
        
        return output;
    }
}