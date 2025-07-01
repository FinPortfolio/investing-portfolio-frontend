'use client'

import Link from 'next/link'
import { SIDEBAR_DATA } from './sidebarAppMenu.data'
import type { ISidebarAppItem } from './sidebarAppMenu.types'
// import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'

export function SidebarAppMenu() {
    return (
        <nav className="flex flex-col my-auto text-base opacity-80">
            <ul>
                <li>
                    <button className="py-2 hover:text-primaryLight">
                        <ChevronLeft />
                        {/* <ChevronRight /> */}
                    </button>
                </li>
                {SIDEBAR_DATA.map((item: ISidebarAppItem, index) => (
                    <li key={index} className="hover:text-primaryLight">
                        {item.link ? (
                            <Link href={item.link} className="flex gap-4 items-center py-2">
                                <item.icon />
                                <span>{item.label}</span>
                            </Link>
                        ) : item.onClick ? (
                            <button onClick={item.onClick} className="flex gap-4 items-center py-2">
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
