'use client'

import Link from 'next/link'
import { SIDEBAR_DATA } from './sidebarAppMenu.data'
import type { ISidebarAppItem } from './sidebarAppMenu.types'

interface SidebarAppMenuProps {
    collapsed: boolean
}

export function SidebarAppMenu({ collapsed }: SidebarAppMenuProps) {
    return (
        <nav className="flex item-start text-base opacity-80 w-full transition-all duration-300">
            <ul>
                {SIDEBAR_DATA.map((item: ISidebarAppItem, index) => (
                    <li key={index} className="hover:text-primaryLight">
                        {item.link ? (
                            <Link
                                href={item.link}
                                className={`relative flex py-2 transition-all duration-300 ${collapsed ? '' : 'gap-5'}`}
                            >
                                <item.icon />
                                <span
                                    className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
    ${collapsed ? 'opacity-0 translate-x-[-10px] delay-0' : 'opacity-100 translate-x-0 delay-200'}

  `}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        ) : item.onClick ? (
                            <button
                                onClick={item.onClick}
                                className={`flex py-2 transition-all duration-300 ${collapsed ? '' : 'gap-5'}`}
                            >
                                <item.icon />
                                <span
                                    className={`whitespace-nowrap overflow-hidden transition-all duration-300 ease-in-out
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
