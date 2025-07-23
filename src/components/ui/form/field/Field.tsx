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
                    className={`h-9 input-basic ${
                        error ? 'border-error focus:border-error' : 'border-light focus:border-primaryDark'
                    }`}
                    {...registration}
                    {...props}
                />
            </label>
            <p className="text-error text-xs mt-1 min-h-[1.125rem]">{error || '\u00A0'}</p>
        </div>
    )
}
