'use client'

import Link from 'next/link'
import { SIDEBAR_DATA } from './sidebarMenu.data'
import type { ISidebarAppItem } from './sidebarMenu.types'

interface SidebarAppMenuProps {
    collapsed: boolean
}

export function SidebarAppMenu({ collapsed }: SidebarAppMenuProps) {
    return (
        <nav className="flex item-start text-base opacity-80 w-full transition-all duration-300">
            <ul>
                {SIDEBAR_DATA.map((item: ISidebarAppItem, index) => (
                    <li key={index} className="hover:text-primaryLight transition-color delay-0">
                        {item.link ? (
                            <Link href={item.link} className="sidebar-item-custom">
                                <item.icon />
                                <span
                                    className={`sidebar-item-transition-custom
    ${collapsed ? 'opacity-0 translate-x-[-10px] delay-0' : 'opacity-100 translate-x-0 delay-200'}

  `}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        ) : item.onClick ? (
                            <button onClick={item.onClick} className="sidebar-item-custom">
                                <item.icon />
                                <span
                                    className={`sidebar-item-transition-custom
    ${collapsed ? 'opacity-0 translate-x-[-10px] delay-0' : 'opacity-100 translate-x-0 delay-200'}
  `}
                                >
                                    {item.label}
                                </span>
                            </button>
                        ) : null}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
