import type { TextareaHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string
    error?: string
    registration: UseFormRegisterReturn
}

export function TextareaField({ label, error, registration, ...props }: TextareaFieldProps) {
    return (
        <div>
            <label>
                <span className="input-label">{label}</span>
                <textarea
                    className={`input-basic focus:border-primaryDark ${error ? 'border-error' : 'border-primaryLight'}`}
                    rows={4}
                    {...registration}
                    {...props}
                />
            </label>
            {error && <p className="text-error text-xs mt-1">{error}</p>}
        </div>
    )
}
