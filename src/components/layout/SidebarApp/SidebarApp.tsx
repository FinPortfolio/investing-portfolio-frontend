import Image from 'next/image'
import { SidebarAppMenu } from '@/components/layout/SidebarApp/SidebarAppMenu/SidebarAppMenu'
import Link from 'next/link'
import { PUBLIC_PAGE } from '@/config/public-page.config'

export function SidebarApp() {
    return (
        <aside className="max-w-[20%] h-screen bg-sidebar flex flex-col align-center shadow-custom-green p-layout">
            <Link href={PUBLIC_PAGE.HOME}>
                <div className="w-full relative h-[auto]" style={{ aspectRatio: '171 / 64' }}>
                    <Image
                        src="/assets/logo_full_inv_portfolio.svg"
                        alt="Invest Portfolio logo full"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                {/* <Image src="/assets/logo_inv_portfolio.svg" alt="Invest Portfolio logo" width={57} height={64} /> */}
            </Link>
            <SidebarAppMenu />
        </aside>
    )
}
