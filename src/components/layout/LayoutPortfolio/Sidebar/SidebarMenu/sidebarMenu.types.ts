import type { LucideIcon } from 'lucide-react'

export interface ISidebarAppItem {
    icon: LucideIcon
    label: string
    link?: string
    onClick?: () => void
    isAction?: boolean
}
