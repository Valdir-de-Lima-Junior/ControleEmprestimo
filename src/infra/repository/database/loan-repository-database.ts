import { Item } from "../../../domain/entity/item";
import { Loan } from "../../../domain/entity/loan";
import { Person } from "../../../domain/entity/person";
import { User } from "../../../domain/entity/user";
import { LoanRepository } from "../../../domain/repository/loan-repository";
import { Connection } from "../../database/connection";

export default class LoanRepositoryDatabase implements LoanRepository{
    constructor(private connection: Connection) {}

    async getAll(): Promise<Loan[]>{
        const output = []
        const loansData = await this.connection.execute(`
        SELECT l.id, l.date_loan, l.date_return,
               p.nome AS person_name, p.document, p.id AS id_person,
               u.user_name, u.id AS id_user,
               i.name, i.id AS id_item,
        FROM loans l
        LEFT JOIN people p ON l.id_person = p.id
        LEFT JOIN users u ON e.id_user = u.id
        LEFT JOIN items i ON e.id_item = i.id
        `);
    
        for (const loanData of loansData) {
    
            const item = new Item(
                loanData.name,   
                loanData.id       
            );
    
            const person = new Person(
                loanData.document,  
                loanData.name,  
                loanData.id_person    
            );

            const user = new User(
                person,                       
                loanData.user_name,   
                loanData.id_user   
            );
    
            const loan = new Loan(
                person,
                user,
                item,
                loanData.date_loan,
                loanData.date_return,
                loanData.id
            );

            output.push(loan)
        }

        return output;
    }

    async getById(id: string): Promise<Loan>{
        const [ loanData ] = await this.connection.execute(`
        SELECT l.id, l.date_loan, l.date_return,
               p.nome AS person_name, p.document, p.id AS id_person,
               u.user_name, u.id AS id_user,
               i.name, i.id AS id_item,
        FROM loans l
        LEFT JOIN people p ON l.id_person = p.id
        LEFT JOIN users u ON e.id_user = u.id
        LEFT JOIN items i ON e.id_item = i.id
        WHERE l.id = $1`,
            [id]
        );

        if (!loanData) {
            throw new Error('Emprestimo não encontrado');
        }

        const item = new Item(
            loanData.name,   
            loanData.id 
        );

        const person = new Person(
            loanData.document,  
            loanData.name,  
            loanData.id_person
        );

        const user = new User(
            person,                       
            loanData.user_name,   
            loanData.id_user 
        );

        const loan = new Loan(
            person,
            user,
            item,
            loanData.date_loan,
            loanData.date_return,
            loanData.id
        );

        return loan;
    }

    async create(loan: Loan): Promise<void>{
        await this.connection.execute(`
        INSERT INTO loans (id, id_user, id_item, date_return, date_return)
        VALUES ($1, $2, $3, $4, $5, $6)`,
            [loan.getId(),
            loan.getPerson().getId(),
            loan.getUser().getId(),
            loan.getItem().getId(),
            loan.getLoanDate(),
            loan.getReturnDate()]);
    }

    async update(loan: Loan): Promise<void>{
        await this.connection.execute(`
        UPDATE loans
        SET id_person = $1,
            id_user = $2,
            id_item = $3,
            date_loan = $4,
            date_return = $5
        WHERE id = $6`,
            [loan.getId(),
            loan.getPerson().getId(),
            loan.getUser().getId(),
            loan.getItem().getId(),
            loan.getLoanDate(),
            loan.getReturnDate()]);
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}