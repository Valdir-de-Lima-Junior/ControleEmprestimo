import { Loan } from "../../../domain/entity/loan";
import { LoanRepository } from "../../../domain/repository/loan-repository";
import { Connection } from "../../database/connection";

export default class LoanRepositoryDatabase implements LoanRepository{
    constructor(private connection: Connection) {}
    
    getAll(): Promise<Loan[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<Loan> {
        throw new Error("Method not implemented.");
    }
    create(item: Loan): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(item: Loan): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}