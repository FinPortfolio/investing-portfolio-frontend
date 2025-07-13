import { CirclePlus, Briefcase, ArrowLeftRight, ChartNoAxesCombined, Columns3Cog } from 'lucide-react'
import type { ISidebarItem } from '@/components/layout/LayoutPortfolio/Sidebar/SidebarMenu/sidebarMenu.types'
import { PUBLIC_PAGE } from '@/config/public-page.config'

export const SIDEBAR_DATA: ISidebarItem[] = [
    {
        icon: CirclePlus,
        label: 'Quick Action',
        isAction: true,
    },
    {
        icon: Briefcase,
        label: 'Portfolio Info',
        link: PUBLIC_PAGE.PORTFOLIO,
    },
    {
        icon: ArrowLeftRight,
        label: 'Transactions',
        link: PUBLIC_PAGE.TRANSACTIONS,
    },
    {
        icon: ChartNoAxesCombined,
        label: 'Quotes Table',
        link: PUBLIC_PAGE.QUOTES,
    },
    {
        icon: Columns3Cog,
        label: 'Portfolio Setup',
        link: PUBLIC_PAGE.SETUP,
    },
]
