'use client'

import Image from 'next/image'
import { SidebarAppMenu } from '@/components/layout/LayoutPortfolio/Sidebar/SidebarMenu/SidebarMenu'
import Link from 'next/link'
import { PUBLIC_PAGE } from '@/config/public-page.config'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export function SidebarApp() {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const toggleSidebar = (): void => {
        setCollapsed((prev) => !prev)
    }

    return (
        <aside
            className={`h-screen bg-sidebar flex flex-col align-start shadow-custom-green p-layout  transition-[width]  duration-300 ease-in-out ${
                collapsed ? 'w-[100px]' : 'w-[240px]'
            }`}
        >
            <Link href={PUBLIC_PAGE.HOME}>
                <div className="flex items-center gap-5">
                    <Image
                        src="/assets/logo_inv_portfolio.svg"
                        alt="Invest Portfolio logo full"
                        width={36}
                        height={40}
                    />
                    <div
                        className={`sidebar-item-transition-custom ${
                            collapsed
                                ? 'opacity-0 translate-x-[-10px] w-0'
                                : 'opacity-100 translate-x-0 w-auto delay-200'
                        }`}
                    >
                        <Image
                            src="/assets/logo_text_inv_portfolio.svg"
                            alt="Invest Portfolio logo full"
                            width={101}
                            height={34}
                        />
                    </div>
                </div>
            </Link>
            <div className="flex flex-col justify-center flex-grow">
                <button className="py-2 hover:text-primaryLight transition-all duration-300" onClick={toggleSidebar}>
                    {collapsed ? <ChevronRight /> : <ChevronLeft />}
                </button>
                <SidebarAppMenu collapsed={collapsed} />
            </div>
        </aside>
    )
}
