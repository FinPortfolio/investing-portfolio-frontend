import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { Calendar } from 'lucide-react'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
    registration: UseFormRegisterReturn
}

export function Field({ label, error, registration, ...props }: FieldProps) {
    const isDate = props.type === 'date'

    return (
        <div>
            <label>
                <span className="input-label">{label}</span>
                <div className="relative">
                    <input
                        className={`h-9 input-basic ${
                            error ? 'border-error focus:border-error' : 'border-light focus:border-primaryDark'
                        }`}
                        {...registration}
                        {...props}
                    />
                    {isDate && (
                        <Calendar
                            size={16}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-white pointer-events-none"
                        />
                    )}
                </div>
            </label>
            <p className="text-error text-xs mt-1 min-h-[1.125rem]">{error || '\u00A0'}</p>
        </div>
    )
}
