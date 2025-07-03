'use client'

import Link from 'next/link'
import { SIDEBAR_DATA } from './sidebarAppMenu.data'
import type { ISidebarAppItem } from './sidebarAppMenu.types'

export function SidebarAppMenu() {
    return (
        <nav className="flex text-base opacity-80">
            <ul>
                {SIDEBAR_DATA.map((item: ISidebarAppItem, index) => (
                    <li key={index} className="hover:text-primaryLight">
                        {item.link ? (
                            <Link href={item.link} className="flex gap-5 items-center py-2 whitespace-nowrap">
                                <item.icon />
                                <span>{item.label}</span>
                            </Link>
                        ) : item.onClick ? (
                            <button onClick={item.onClick} className="flex gap-5 items-center py-2 whitespace-nowrap">
                                <item.icon />
                                <span>{item.label}</span>
                            </button>
                        ) : null}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
