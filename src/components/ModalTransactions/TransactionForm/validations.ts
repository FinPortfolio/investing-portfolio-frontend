import type { RegisterOptions } from 'react-hook-form'
import type { ITransactionForm } from './transactionForm.types'

type ValidationRules = {
    [K in keyof ITransactionForm]?: RegisterOptions<ITransactionForm, K>
}

export const validations: ValidationRules = {
    symbolID: {
        required: 'Asset ID is required',
    },
    transactionType: {
        required: 'Transaction type is required',
    },
    transactionQuantity: {
        required: 'Quantity is required',
        min: { value: 1, message: 'Quantity must be at least 1' },
        valueAsNumber: true,
    },
    transactionDate: {
        required: 'Transaction date is required',
    },
    initialPrice: {
        required: 'Initial price is required',
        min: { value: 0, message: 'Price must be non-negative' },
        valueAsNumber: true,
    },
    transactionCommision: {
        required: 'Commission is required',
        min: { value: 0, message: 'Commission must be non-negative' },
        valueAsNumber: true,
    },
    bondNominal: {
        valueAsNumber: true,
    },
    bondAccruedInterest: {
        valueAsNumber: true,
    },
    notes: {},
}
