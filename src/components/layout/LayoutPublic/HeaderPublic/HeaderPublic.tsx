import { PUBLIC_PAGE } from '@/config/paths.config'
import Link from 'next/link'

export function HeaderPublic() {
    return (
        <header className="p-layout flex justify-end align-center gap-5">
            <Link href={PUBLIC_PAGE.DEMO}>GO TO DEMO PAGE</Link>
        </header>
    )
}
