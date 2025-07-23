import type { SelectHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

interface Option {
    label: string
    value: string
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string
    error?: string
    registration: UseFormRegisterReturn
    options: Option[]
}

export function SelectField({ label, error, registration, options, ...props }: SelectFieldProps) {
    return (
        <div>
            <label>
                <span className="input-label">{label}</span>
                <select
                    className={`h-9 input-basic ${
                        error ? 'border-error focus:border-error' : 'border-primaryLight focus:border-primaryDark'
                    }`}
                    {...registration}
                    {...props}
                >
                    {options.map((opt) => (
                        <option className="bg-modalBg" key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            </label>
            <p className="text-error text-xs ml-2 min-h-[1rem]">{error || '\u00A0'}</p>
        </div>
    )
}
