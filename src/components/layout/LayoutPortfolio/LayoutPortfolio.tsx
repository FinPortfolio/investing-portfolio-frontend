import type { PropsWithChildren } from 'react'
import { CentralModuleApp } from '@/components/layout/LayoutPortfolio/CentralModule/CentralModule'
import { SidebarApp } from '@/components/layout/LayoutPortfolio/Sidebar/Sidebar'

export function LayoutApp({ children }: PropsWithChildren<unknown>) {
    return (
        <main className="flex">
            <SidebarApp />
            <CentralModuleApp>{children}</CentralModuleApp>
        </main>
    )
}
