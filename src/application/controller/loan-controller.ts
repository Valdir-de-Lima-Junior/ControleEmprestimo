import { ItemRepository } from "../../domain/repository/item-repository";
import { LoanRepository } from "../../domain/repository/loan-repository";
import { PersonRepository } from "../../domain/repository/person-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { UserRepository } from "../../domain/repository/user-repository";
import { CreateLoanUseCase } from "../use-cases/create-loan/create-loan-usecase";
import { DeleteLoanUseCase } from "../use-cases/delete-loan/delete-loan-usecase";
import { GetLoanUseCase } from "../use-cases/get-loan/get-loan-usecase";
import { GetLoansUseCase } from "../use-cases/get-loans/get-loans-usecase";
import { UpdateLoanInput } from "../use-cases/update-loan/update-loan-input";
import { UpdateLoanUseCase } from "../use-cases/update-loan/update-loan-usecase";

export class LoanController{
    constructor(private repositoryFactory: RepositoryFactory,
        private readonly itemRepository: ItemRepository,
        private readonly userRepository: UserRepository,
        private readonly personRepository: PersonRepository,
        private readonly loanRepository: LoanRepository
    ){}

    async getAll(input: any){
        const getLoans = new GetLoansUseCase(this.loanRepository);
        return await getLoans.execute(input);
    }
    
    async getByID(id: string){
        try{
            const getLoan = new GetLoanUseCase(this.loanRepository);
            return await getLoan.execute({id});
        } catch (e: any){
            return{
                message: e.message
            }
        }
    }

    async create(input: any){
        try{
            const createLoanUseCase = new CreateLoanUseCase(this.repositoryFactory);
            return await createLoanUseCase.execute(input);
        } catch (e: any){
            return{
                message: e.message
            }
        }     
    }

    update(input: UpdateLoanInput){
        const updateLoanUseCase = new UpdateLoanUseCase(
            this.itemRepository,
            this.personRepository,
            this.userRepository,
            this.loanRepository
        );
        return updateLoanUseCase.execute(input);
    }

    delete(id: string){
        try{
        const deleteLoanUseCase = new DeleteLoanUseCase(this.repositoryFactory.createLoanRepository());
        return deleteLoanUseCase.execute({id});
        } catch (e: any){
            return{
                message: e.message
            }
        }
    }


}