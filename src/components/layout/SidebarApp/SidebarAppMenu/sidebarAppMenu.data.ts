import { CirclePlus, Briefcase, ArrowLeftRight, ChartNoAxesCombined, Columns3Cog } from 'lucide-react'
import type { ISidebarAppItem } from '@/components/layout/SidebarApp/SidebarAppMenu/sidebarAppMenu.types'
import { PUBLIC_PAGE } from '@/config/public-page.config'

export const SIDEBAR_DATA: ISidebarAppItem[] = [
    {
        icon: CirclePlus,
        label: 'Quick Action',
        onClick: () => {
            console.log('open modal')
        },
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
