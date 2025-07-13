import type { PropsWithChildren } from 'react'
import { CentralModule } from '@/components/layout/LayoutPortfolio/CentralModule/CentralModule'
import { Sidebar } from '@/components/layout/LayoutPortfolio/Sidebar/Sidebar'

export function LayoutPortfolio({ children }: PropsWithChildren<unknown>) {
    return (
        <main className="flex">
            <Sidebar />
            <CentralModule>{children}</CentralModule>
        </main>
    )
}
