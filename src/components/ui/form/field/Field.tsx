import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
    registration: UseFormRegisterReturn
}

export function Field({ label, error, registration, ...props }: Props) {
    return (
        <div>
            <label>
                <span className="block">{label}</span>
                <input
                    className={`w-full px-3 py-2 text-sm border rounded transition-colors focus:outline-none focus:ring-0 focus:border-primary ${
                        error ? 'border-error' : 'border-primaryLight'
                    }`}
                    {...registration}
                    {...props}
                />
            </label>
            {error && <p className="text-error text-xs mt-1">{error}</p>}
        </div>
    )
}
