import { Loan } from "../entity/loan";

export interface LoanRepository{
    getAll(): Promise<Loan[]>;
    getById(id: string): Promise<Loan>;
    create(item: Loan): Promise<void>;
    update(item: Loan): Promise<void>;
    delete(id: string): Promise<void>;
}