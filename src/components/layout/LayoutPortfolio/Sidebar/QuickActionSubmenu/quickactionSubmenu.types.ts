import type { LucideIcon } from 'lucide-react'
import type { ComponentType } from 'react'

export interface IQuickActionItem {
    icon?: LucideIcon
    label: string
    modal?: ComponentType<unknown>
}
