import { CircleUser, LogOut } from 'lucide-react'

export function HeaderApp() {
    return (
        <header className="p-layout flex justify-end align-center gap-4">
            <CircleUser />
            <LogOut />
        </header>
    )
}
