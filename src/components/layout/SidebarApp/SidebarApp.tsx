import Image from 'next/image'
import { SidebarAppMenu } from '@/components/layout/SidebarApp/SidebarAppMenu/SidebarAppMenu'
import Link from 'next/link'
import { PUBLIC_PAGE } from '@/config/public-page.config'
import { ChevronLeft } from 'lucide-react'

export function SidebarApp() {
    return (
        <aside className="h-screen bg-sidebar flex flex-col align-start shadow-custom-green p-layout">
            <Link href={PUBLIC_PAGE.HOME}>
                {/* <div className="w-full relative h-[auto]" style={{ aspectRatio: '171 / 64' }}>
                    <Image
                        src="/assets/logo_full_inv_portfolio2.svg"
                        alt="Invest Portfolio logo full"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div> */}
                <div className="flex items-center gap-5">
                    <div className="relative h-[auto]" style={{ aspectRatio: '57 / 64' }}>
                        <Image
                            src="/assets/logo_inv_portfolio.svg"
                            alt="Invest Portfolio logo full"
                            width={57}
                            height={64}
                        />
                    </div>
                    <div className="relative h-[auto]" style={{ aspectRatio: '101 / 34' }}>
                        <Image
                            src="/assets/logo_text_inv_portfolio.svg"
                            alt="Invest Portfolio logo full"
                            width={101}
                            height={34}
                        />
                    </div>
                </div>
            </Link>
            <div className="flex flex-col justify-center items-start flex-grow">
                <button className="py-2 hover:text-primaryLight">
                    <ChevronLeft />
                    {/* <ChevronRight /> */}
                </button>
                <SidebarAppMenu />
            </div>
        </aside>
    )
}
