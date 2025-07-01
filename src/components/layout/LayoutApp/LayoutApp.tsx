import type { PropsWithChildren } from 'react'
import { CentralModuleApp } from '@/components/layout/CentralModuleApp/CentralModuleApp'
import { SidebarApp } from '@/components/layout/SidebarApp/SidebarApp'

export function LayoutApp({ children }: PropsWithChildren<unknown>) {
    return (
        <main className="flex">
            <SidebarApp />
            <CentralModuleApp>{children}</CentralModuleApp>
        </main>
    )
}
