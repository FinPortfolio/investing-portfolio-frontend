import { currencyOptions } from '@/types/commonTypes'

export const transactionCurrencyOptions = currencyOptions.map(({ value, label }) => ({ value, label }))

export const transactionTypeOptions = [
    { value: 'buy', label: 'Buy' },
    { value: 'sell', label: 'Sell' },
]
