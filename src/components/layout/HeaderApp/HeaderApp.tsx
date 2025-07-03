'use client'

import Link from 'next/link'
import { CircleUser, LogOut } from 'lucide-react'
import { PUBLIC_PAGE } from '@/config/public-page.config'

export function HeaderApp() {
    return (
        <header className="p-layout flex justify-end align-center gap-5">
            <Link href={PUBLIC_PAGE.PROFILE}>
                <CircleUser />
            </Link>
            <LogOut />
        </header>
    )
}
