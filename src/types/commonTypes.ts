export const ASSET_TYPES = ['stock', 'etf', 'bond', 'crypto'] as const
export type AssetType = (typeof ASSET_TYPES)[number]

export const CURRENCY_TYPES = ['USD', 'EUR', 'RUB'] as const
export type CurrencyType = (typeof CURRENCY_TYPES)[number]

export interface CurrencyMeta {
    value: CurrencyType
    label: string
    symbol: string
}
export const currencyOptions: CurrencyMeta[] = [
    { value: 'USD', label: 'US Dollar', symbol: '$' },
    { value: 'EUR', label: 'Euro', symbol: '€' },
    { value: 'RUB', label: 'Ruble', symbol: '₽' },
]
