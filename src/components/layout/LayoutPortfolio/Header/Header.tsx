'use client'

import Link from 'next/link'
import { CircleUser, LogOut } from 'lucide-react'
import { PROTECTED_PAGE } from '@/config/paths.config'

export function Header() {
    return (
        <header className="p-layout flex justify-end align-center gap-5">
            <Link href={PROTECTED_PAGE.PROFILE}>
                <CircleUser />
            </Link>
            <LogOut />
        </header>
    )
}
