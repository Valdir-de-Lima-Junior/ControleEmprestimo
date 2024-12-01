import { Loan } from "../../../domain/entity/loan";
import { LoanRepository } from "../../../domain/repository/loan-repository";
import { Connection } from "../../database/connection";

export default class LoanRepositoryDatabase implements LoanRepository{
    constructor(private connection: Connection) {}
    
        async getAll(): Promise<Loan[]> {
            const output: Loan[] = [];
            try {
                const loansData = await this.connection.execute(
                    'SELECT id, id_user, id_item, date_loan, date_return FROM loans'
                );
    
                if (loansData && loansData.length > 0) {
                    for (const loanData of loansData) {
                        const loan = new Loan(
                            loanData.id,
                            loanData.id_user,
                            loanData.id_item,
                            loanData.date_loan,
                            loanData.date_return
                        );
                        output.push(loan);
                    }
                }
    
                return output;
            } catch (error) {
                throw new Error(`Erro ao buscar empréstimo: ${error}`);
            }
        }
    
        async getById(id: any): Promise<Loan> {
            try {
                const loanData: Loan = await this.connection.execute(
                    'SELECT id, id_user, id_item, date_loan, date_return FROM loans WHERE id = :id',
                    { id }
                );
    
                if (!loansData) {
                    throw new Error(`Empréstimo com o id ${id} não encontrado`);
                }
    
                return new Loan(
                    loanData.id,
                    loanData.id_user,
                    loanData.id_item,
                    loanData.date_loan,
                    loanData.date_return
                );
            } catch (error) {
                throw new Error(`Erro ao buscar usuário com o id ${id}: ${error}`);
            }
        }
    
        async create(loan: any): Promise<void> {
            try {
                const { id, id_user, id_item, date_loan, date_return } = loan;
                const result = await this.connection.execute(
                    'INSERT INTO loans (id, id_user, id_item, date_loan, date_return) VALUES (:id, :id_user, :id_item, :date_loan, :date_return)',
                    { id, id_user, id_item, date_loan, date_return }
                );
    
                if (result.affectedRows === 0) {
                    throw new Error('Falha ao inserir empréstimo');
                }
            } catch (error) {
                throw new Error(`Erro ao criar Empréstimo: ${error}`);
            }
        }
    
        async update(loan: any): Promise<void> {
            try {
                const { id, id_user, id_item, date_loan, date_return } = loan;
                const result = await this.connection.execute(
                    'UPDATE loans SET id_user = :id_user, id_item = :id_item, date_loan = :date_loan, date_return = :date_return WHERE id = :id',
                    { id, id_user, id_item, date_loan, date_return }
                );
    
                if (result.affectedRows === 0) {
                    throw new Error(`Usuário com o id ${id} não encontrado`);
                }
            } catch (error) {
                throw new Error(`Erro ao atualizar usuário com io id ${loan.id}: ${error}`);
            }
        }
    
        async delete(id: any): Promise<void> {
            try {
                const result = await this.connection.execute(
                    'DELETE FROM loans WHERE id = :id',
                    { id }
                );
    
                if (result.affectedRows === 0) {
                    throw new Error(`Empréstimo com o id ${id} não encontrado`);
                }
            } catch (error) {
                throw new Error(`Erro ao deletar o empréstimo ${id}: ${error}`);
            }
        }
    }