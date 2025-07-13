'use client'

import { QUICK_ACTION_DATA } from './quickactionSubmenu.data'
import type { IQuickActionItem } from './quickactionSubmenu.types'

export function QuickActionSubmenu() {
    return (
        <ul className="bg-sidebar flex flex-col py-4 px-layout border-l-2 border-l-primaryLight rounded-tr-md rounded-br-md pl-5 ">
            {QUICK_ACTION_DATA.map((item: IQuickActionItem, index) => (
                <li key={index} className="whitespace-nowrap py-2 hover:text-primaryLight">
                    <button className="">{item.label}</button>
                </li>
            ))}
        </ul>
    )
}
