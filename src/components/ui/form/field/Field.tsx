import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
    registration: UseFormRegisterReturn
}

export function Field({ label, error, registration, ...props }: FieldProps) {
    return (
        <div>
            <label>
                <span className="input-label">{label}</span>
                <input
                    className={`input-basic focus:border-primaryDark ${
                        error ? 'border-error focus:border-error' : 'border-light'
                    }`}
                    {...registration}
                    {...props}
                />
            </label>
            {error && <p className="text-error text-xs mt-1">{error}</p>}
        </div>
    )
}
