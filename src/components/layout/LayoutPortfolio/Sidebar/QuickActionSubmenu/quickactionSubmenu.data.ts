import type { IQuickActionItem } from '@/components/layout/LayoutPortfolio/Sidebar/QuickActionSubmenu/quickactionSubmenu.types'
import { ModalBondTransaction } from '@/components/ModalTransactions/ModalBondTransaction/ModalBondTransaction'
import { ModalStockTransaction } from '@/components/ModalTransactions/ModalStockTransaction/ModalStockTransaction'
import { ModalETFTransaction } from '@/components/ModalTransactions/ModalETFTransaction/ModalETFTransaction'
import { ModalCryptoTransaction } from '@/components/ModalTransactions/ModalCryptoTransaction/ModalCryptoTransaction'

export const QUICK_ACTION_DATA: IQuickActionItem[] = [
    { id: 'stock', label: 'Add Stock Transaction', modal: ModalStockTransaction },
    { id: 'etf', label: 'Add ETF Transaction', modal: ModalETFTransaction },
    { id: 'bond', label: 'Add Bond Transaction', modal: ModalBondTransaction },
    { id: 'crypto', label: 'Add Crypto Transaction', modal: ModalCryptoTransaction },
]
