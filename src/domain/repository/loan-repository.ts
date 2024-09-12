import { Loan } from "../entity/loan";

export interface LoanRepository{
    getAll(): Loan[];
    getById(id: string): Loan;
    create(item: Loan): void;
    update(item: Loan): void;
    
}