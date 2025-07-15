import { HeaderPublic } from '@/components/layout/LayoutPublic/HeaderPublic/HeaderPublic'

export default function Home() {
    return (
        <>
            <HeaderPublic />
            <main className="p-layout flex flex-col items-center justify-items-center min-h-screen gap-24">
                <div>Some staff to display</div>
            </main>
            {/* <FooterPublic /> */}
        </>
    )
}
