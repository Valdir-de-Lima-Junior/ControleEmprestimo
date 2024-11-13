export type UpdateLoanInput = {
    id: string;
    itemId: string;
    personId: string;
    userId: string;
    loanDate: Date | undefined;
}