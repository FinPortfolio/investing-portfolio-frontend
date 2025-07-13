'use client'

import Link from 'next/link'
import { SIDEBAR_DATA } from './sidebarMenu.data'
import type { ISidebarItem } from './sidebarMenu.types'
import { useEffect, useRef, useState } from 'react'
import { QuickActionSubmenu } from '../QuickActionSubmenu/QuickActionSubmenu'

interface SidebarMenuProps {
    collapsedMenu: boolean
    ignoreClickRefs?: Array<React.RefObject<HTMLElement | null>>
}

export function SidebarMenu({ collapsedMenu, ignoreClickRefs }: SidebarMenuProps) {
    const [submenuOpen, setSubmenuOpen] = useState(false)
    const submenuRef = useRef<HTMLDivElement | null>(null)
    const buttonRef = useRef<HTMLButtonElement | null>(null)

    const toggleSubmenu = () => setSubmenuOpen((prev) => !prev)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node

            const clickedInsideIgnoredRef = ignoreClickRefs?.some((ref) => ref.current && ref.current.contains(target))

            if (
                submenuRef.current &&
                !submenuRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target) &&
                !clickedInsideIgnoredRef
            ) {
                setSubmenuOpen(false)
            }
        }

        if (submenuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [submenuOpen, ignoreClickRefs])

    return (
        <nav className="relative px-layout flex item-start text-base w-full transition-all duration-300">
            <ul className="opacity-80">
                {SIDEBAR_DATA.map((item: ISidebarItem, index) => (
                    <li key={index} className="hover:text-primaryLight transition-color delay-0">
                        {item.link ? (
                            <Link href={item.link} className="sidebar-item-custom">
                                <item.icon />
                                <span
                                    className={`sidebar-item-transition-custom
    ${collapsedMenu ? 'opacity-0 translate-x-[-10px] delay-0' : 'opacity-100 translate-x-0 delay-200'}

  `}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        ) : item.isAction ? (
                            <button
                                ref={buttonRef}
                                onClick={toggleSubmenu}
                                className={`w-full  sidebar-item-custom ${
                                    submenuOpen ? 'text-primaryLight' : 'text-white hover:text-primaryLight'
                                }`}
                            >
                                <item.icon />
                                <span
                                    className={`sidebar-item-transition-custom
    ${collapsedMenu ? 'opacity-0 translate-x-[-10px] delay-0' : 'opacity-100 translate-x-0 delay-200'}
  `}
                                >
                                    {item.label}
                                </span>
                            </button>
                        ) : null}
                    </li>
                ))}
            </ul>
            {submenuOpen && (
                <div ref={submenuRef} className="absolute left-full top-0 z-10 text-white/80">
                    <QuickActionSubmenu />
                </div>
            )}
        </nav>
    )
}
