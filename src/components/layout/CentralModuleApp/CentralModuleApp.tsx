import type { PropsWithChildren } from 'react'
import { HeaderApp } from '@/components/layout/HeaderApp/HeaderApp'

export function CentralModuleApp({ children }: PropsWithChildren<unknown>) {
    return (
        <>
            <HeaderApp />
            <section>{children}</section>
        </>
    )
}
