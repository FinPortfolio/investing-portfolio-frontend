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
                    className={`input-basic ${error ? 'border-error' : 'border-primaryLight focus:border-primaryDark'}`}
                    rows={4}
                    {...registration}
                    {...props}
                />
            </label>
            <p className="text-error text-xs mt-1 min-h-[1rem]">{error || '\u00A0'}</p>
        </div>
    )
}
