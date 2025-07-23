export interface ITransactionForm {
    symbolID: string
    transactionType: string
    transactionCurrency: string
    transactionDate: string
    initialPrice: number
    transactionCommision: number
    transactionQuantity: number
    notes: string
    bondNominal?: number
    bondAccruedInterest?: number
    isAccruedInterestPerBond?: boolean
}
