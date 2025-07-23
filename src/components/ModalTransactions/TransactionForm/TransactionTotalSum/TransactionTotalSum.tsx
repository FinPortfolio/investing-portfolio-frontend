import { getCurrencySymbol } from '@/utils/helper'
import type { CurrencyType } from '@/types/commonTypes'

interface TransactionTotalSumProps {
    currency: CurrencyType
    price: number
    quantity: number
    commission: number
    isBond?: boolean
    accruedInterest?: number
    accruedPerBond?: boolean
}

export function TransactionTotalSum({
    currency,
    price,
    quantity,
    commission,
    isBond = false,
    accruedInterest = 0,
    accruedPerBond = true,
}: TransactionTotalSumProps) {
    const baseCost = price * quantity
    const aiCost = isBond ? (accruedPerBond ? accruedInterest * quantity : accruedInterest) : 0

    const total = +(baseCost + commission + aiCost).toFixed(2)
    const currencySymbol = getCurrencySymbol(currency)
    return (
        <div className="text-sm text-white/80 mt-2">
            Estimated Total:{' '}
            <span className="font-medium text-white">
                {currencySymbol}
                {'\u00A0'}
                {total}
            </span>
        </div>
    )
}
