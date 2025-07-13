import type { IQuickActionItem } from '@/components/layout/LayoutPortfolio/Sidebar/QuickActionSubmenu/quickactionSubmenu.types'
import { ModalBondTransaction } from '@/components/ModalTransactions/ModalBondTransaction/ModalBondTransaction'
import { ModalStockTransaction } from '@/components/ModalTransactions/ModalStockTransaction/ModalStockTransaction'
import { ModalETFTransaction } from '@/components/ModalTransactions/ModalETFTransaction/ModalETFTransaction'
import { ModalCryptoTransaction } from '@/components/ModalTransactions/ModalCryptoTransaction/ModalCryptoTransaction'

export const QUICK_ACTION_DATA: IQuickActionItem[] = [
    {
        label: 'Add Stock Transaction',
        modal: ModalStockTransaction,
    },
    {
        label: 'Add ETF Transaction',
        modal: ModalETFTransaction,
    },
    {
        label: 'Add Bond Transaction',
        modal: ModalBondTransaction,
    },
    {
        label: 'Add Crypto Transaction',
        modal: ModalCryptoTransaction,
    },
]
