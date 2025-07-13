import type { PropsWithChildren } from 'react'
import { Header } from '@/components/layout/LayoutPortfolio/Header/Header'

export function CentralModule({ children }: PropsWithChildren<unknown>) {
    return (
        <div className="flex-1 basis-0 w-[100%]">
            <Header />
            <section>{children}</section>
        </div>
    )
}
