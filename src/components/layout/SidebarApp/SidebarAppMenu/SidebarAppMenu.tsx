'use client'

import Link from 'next/link'
import { SIDEBAR_DATA } from './sidebarAppMenu.data'
import type { ISidebarAppItem } from './sidebarAppMenu.types'

export function SidebarAppMenu() {
    return (
        <nav>
            <ul>
                {SIDEBAR_DATA.map((item: ISidebarAppItem, index) => (
                    <li key={index}>
                        {item.link ? (
                            <Link href={item.link}>
                                <item.icon />
                                <span>{item.label}</span>
                            </Link>
                        ) : item.onClick ? (
                            <button onClick={item.onClick}>
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
