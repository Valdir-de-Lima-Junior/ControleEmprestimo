import { LoanRepository } from "../../domain/repository/loan-repository";
import { CreateLoanUsecase } from "../use-cases/create-loan/create-loan-usecase";
import { DeleteLoanUseCase } from "../use-cases/delete-loan/delete-loan-usecase";
import { GetLoanUsecase } from "../use-cases/get-loan/get-loan-usecase";
import { UpdateLoanUsecase } from "../use-cases/update-loan/update-loan-usecase";

export class LoanController{
    constructor(private readonly loanRepository: LoanRepository){}

    create(input: any){
        const createLoanUseCase = new CreateLoanUsecase(this.loanRepository);
        createLoanUseCase.execute(input);
    }

    update(input: any){
        const updateLoanUseCase = new UpdateLoanUsecase(this.loanRepository);
        updateLoanUseCase.execute(input);
    }

    get(input: any){
        const getLoanUseCase = new GetLoanUsecase(this.loanRepository);
        getLoanUseCase.execute(input);
    }

    delete(input: any){
        const deleteLoanUseCase = new DeleteLoanUseCase(this.loanRepository);
        deleteLoanUseCase.execute(input);
    }
}