'use client'

import { QUICK_ACTION_DATA } from './quickactionSubmenu.data'
import type { IQuickActionItem } from './quickactionSubmenu.types'
import { useState } from 'react'

export function QuickActionSubmenu() {
    const [openModalId, setOpenModalId] = useState<string | null>(null)

    return (
        <>
            <ul className="bg-sidebar flex flex-col py-4 px-layout border-l-2 border-l-primaryLight rounded-tr-md rounded-br-md pl-5 ">
                {QUICK_ACTION_DATA.map((item: IQuickActionItem, index) => (
                    <li key={index} className="whitespace-nowrap py-2 hover:text-primaryLight">
                        <button onClick={() => setOpenModalId(item.id)}>{item.label}</button>
                    </li>
                ))}
            </ul>
            {QUICK_ACTION_DATA.map(({ id, label, modal: ModalComponent }) =>
                ModalComponent ? (
                    <ModalComponent
                        key={id}
                        modalTitle={label}
                        isOpen={openModalId === id}
                        onClose={() => setOpenModalId(null)}
                    />
                ) : null,
            )}
        </>
    )
}
