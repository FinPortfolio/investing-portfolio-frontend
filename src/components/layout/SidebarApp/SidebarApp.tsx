import { SidebarAppMenu } from '@/components/layout/SidebarApp/SidebarAppMenu/SidebarAppMenu'
import { Menu } from 'lucide-react'

export function SidebarApp() {
    return (
        <aside>
            <Menu />
            <SidebarAppMenu />
        </aside>
    )
}
