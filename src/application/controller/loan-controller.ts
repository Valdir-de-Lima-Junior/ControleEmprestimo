import { LoanRepository } from "../../domain/repository/loan-repository";
import { CreateLoanUseCase } from "../use-cases/create-loan/create-loan-usecase";
import { DeleteLoanUseCase } from "../use-cases/delete-loan/delete-loan-usecase";
import { GetLoanUseCase } from "../use-cases/get-loan/get-loan-usecase";
import { GetLoansUseCase } from "../use-cases/get-loans/get-loans-usecase";
import { UpdateLoanUseCase } from "../use-cases/update-loan/update-loan-usecase";

export class LoanController{
    constructor(private readonly loanRepository: LoanRepository){}

    create(input: any){
        const createLoanUseCase = new CreateLoanUseCase(this.loanRepository);
        createLoanUseCase.execute(input);
    }

    update(input: any){
        const updateLoanUseCase = new UpdateLoanUseCase(this.loanRepository);
        updateLoanUseCase.execute(input);
    }

    get(input: any){
        const getLoanUseCase = new GetLoanUseCase(this.loanRepository);
        getLoanUseCase.execute(input);
    }

    delete(input: any){
        const deleteLoanUseCase = new DeleteLoanUseCase(this.loanRepository);
        deleteLoanUseCase.execute(input);
    }

    getAll(input: any){
        const getLoansUseCase = new GetLoansUseCase(this.loanRepository);
        getLoansUseCase.execute(input);
    }
}