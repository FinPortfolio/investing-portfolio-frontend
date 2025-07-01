import type { PropsWithChildren } from 'react'
import { HeaderApp } from '@/components/layout/HeaderApp/HeaderApp'

export function CentralModuleApp({ children }: PropsWithChildren<unknown>) {
    return (
        <div className="flex-1 basis-0 w-[100%]">
            <HeaderApp />
            <section>{children}</section>
        </div>
    )
}
