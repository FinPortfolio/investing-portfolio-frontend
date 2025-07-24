'use client'

import { useState } from 'react'
import { QUICK_ACTION_DATA } from './quickactionSubmenu.data'
import { ModalTransactions } from '../../../../ModalTransactions/ModalTransaction'
import type { IQuickActionItem } from './quickactionSubmenu.types'

interface QuickActionSubmenuProps {
    closeSubmenu: () => void
}

export function QuickActionSubmenu({ closeSubmenu }: QuickActionSubmenuProps) {
    const [openModalId, setOpenModalId] = useState<string | null>(null)

    const activeItem = QUICK_ACTION_DATA.find((item) => item.id === openModalId)

    const handleOnClose = () => {
        setOpenModalId(null)
        closeSubmenu()
    }

    return (
        <>
            <ul className="bg-sidebar flex flex-col py-4 px-layout border-l-2 border-l-primaryLight rounded-tr-md rounded-br-md pl-5 ">
                {QUICK_ACTION_DATA.map((item: IQuickActionItem, index) => (
                    <li key={index} className="whitespace-nowrap py-2 hover:text-primaryLight">
                        <button onClick={() => setOpenModalId(item.id)}>{item.label}</button>
                    </li>
                ))}
            </ul>

            {activeItem && (
                <ModalTransactions
                    isOpen={!!openModalId}
                    onClose={() => handleOnClose()}
                    modalTitle={activeItem.label}
                    type={activeItem.type}
                />
            )}
        </>
    )
}
