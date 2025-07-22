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
            <label className="text-sm">
                <span className="block mb-1 text-sm">{label}</span>
                <select
                    className={`w-full bg-transparent px-3 py-2 text-sm border rounded transition-colors focus:outline-none focus:ring-0 focus:border-primary ${
                        error ? 'border-error' : 'border-primaryLight'
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
            {error && <p className="text-error text-xs mt-1">{error}</p>}
        </div>
    )
}
