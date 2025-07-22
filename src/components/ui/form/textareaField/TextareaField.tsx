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
            <label className="text-sm">
                <span className="block mb-1 font-medium">{label}</span>
                <textarea
                    className={`w-full bg-transparent px-3 py-2 text-sm border rounded resize-none transition-colors focus:outline-none focus:ring-0 ${
                        error ? 'border-error' : 'border-primaryLight'
                    }`}
                    rows={4}
                    {...registration}
                    {...props}
                />
            </label>
            {error && <p className="text-error text-xs mt-1">{error}</p>}
        </div>
    )
}
