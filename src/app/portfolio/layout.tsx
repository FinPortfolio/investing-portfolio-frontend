import React from 'react'
import type { Metadata } from 'next'
import { LayoutPortfolio } from '@/components/layout/LayoutPortfolio/LayoutPortfolio'

export const metadata: Metadata = {
    title: 'Investing Portfolio',
    description: 'Manage portfolios, trades, and quotes in one investment tracking app',
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return <LayoutPortfolio>{children}</LayoutPortfolio>
}
