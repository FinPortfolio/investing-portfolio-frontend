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
                    className={`input-basic focus:border-primaryDark ${error ? 'border-error' : 'border-primaryLight'}`}
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
            {error && <p className="text-error text-xs mt-1">{error}</p>}
        </div>
    )
}
