import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import { Calendar } from 'lucide-react'

type FieldVariant = 'primary' | 'secondary'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string
    registration: UseFormRegisterReturn
    variant?: FieldVariant
}

const variantStyles = {
    primary: 'border-white focus:border-primaryDark',
    secondary: 'border-white focus:border-secondaryDark',
}

export function Field({ label, error, registration, variant = 'primary', ...props }: FieldProps) {
    const styles = variantStyles[variant]
    const isDate = props.type === 'date'

    return (
        <div>
            <label>
                <span className="input-label">{label}</span>
                <div className="relative">
                    <input
                        className={`h-9 input-basic ${error ? 'border-error focus:border-error' : styles}`}
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
