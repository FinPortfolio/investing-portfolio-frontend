'use client'

import { Modal } from '../../ui/Modal/Modal'

type Props = {
    isOpen: boolean
    onClose: () => void
    modalTitle: string
}

export function ModalCryptoTransaction({ isOpen, onClose, modalTitle }: Props) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} modalTitle={modalTitle}>
            <div>
                <p>Это базовое модальное окно</p>
                <p>Тут будет форма</p>
            </div>
        </Modal>
    )
}
