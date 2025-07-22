'use client'

import { Modal } from '@/components/ui/modal/Modal'
import { TransactionsForm } from './TransactionForm/TransactionForm'
import type { AssetType } from '@/types/commonTypes'

interface ModalTransactionsProps {
    isOpen: boolean
    onClose: () => void
    modalTitle: string
    type: AssetType
}

export function ModalTransactions({ isOpen, onClose, modalTitle, type }: ModalTransactionsProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} modalTitle={modalTitle}>
            <TransactionsForm type={type} onClose={onClose} />
        </Modal>
    )
}
