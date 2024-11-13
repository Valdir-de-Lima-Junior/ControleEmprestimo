export type CreateLoanInput ={
    id: string | undefined;
    itemId: string;
    personId: string;
    userId: string;
    dateLoan: Date;
    dateReturn: Date;
}