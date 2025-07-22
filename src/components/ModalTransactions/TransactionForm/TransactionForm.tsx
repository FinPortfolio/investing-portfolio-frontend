'use client'

import { useForm } from 'react-hook-form'
import { Field } from '@/components/ui/form/field/Field'
import { SelectField } from '@/components/ui/form/selectField/SelectField'
import { TextareaField } from '@/components/ui/form/textareaField/TextareaField'
import { formatDateToInput } from '@/utils/helper'
import { Button } from '@/components/ui/button/Button'
import type { SubmitHandler } from 'react-hook-form'
import type { AssetType } from '@/types/commonTypes'
import type { ITransactionForm } from './transactionForm.types'
import { transactionTypeOptions, transactionCurrencyOptions } from './transactionsOptions.data'
import { validations } from './validations'

interface TransactionsFormProps {
    type: AssetType
    onClose: () => void
}

export function TransactionsForm({ type, onClose }: TransactionsFormProps) {
    const today = formatDateToInput(new Date())

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ITransactionForm>({
        mode: 'onChange',
        defaultValues: {
            transactionType: 'buy',
            transactionCurrency: 'USD',
            transactionDate: today,
            initialPrice: 0,
            transactionCommision: 0,
            transactionQuantity: 1,
        },
    })

    const onSubmit: SubmitHandler<ITransactionForm> = (data) => {
        reset()
        onClose()
        console.log(data)
    }

    return (
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <Field
                label="Asset ID"
                type="text"
                registration={register('symbolID', validations.symbolID)}
                error={errors.symbolID?.message}
            />
            <div className="grid grid-cols-3 gap-4 my-3">
                <SelectField
                    label="Transaction"
                    registration={register('transactionType')}
                    options={transactionTypeOptions}
                    error={errors.transactionType?.message}
                />
                <Field
                    label="Quantity"
                    type="number"
                    registration={register('transactionQuantity', validations.transactionQuantity)}
                    error={errors.transactionQuantity?.message}
                />
                <Field
                    label="Date"
                    type="date"
                    registration={register('transactionDate', validations.transactionDate)}
                    error={errors.transactionDate?.message}
                />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-3">
                <Field
                    label="Price"
                    type="number"
                    step="any"
                    registration={register('initialPrice', validations.initialPrice)}
                    error={errors.initialPrice?.message}
                />
                <Field
                    label="Commission"
                    type="number"
                    step="any"
                    registration={register('transactionCommision', validations.transactionCommision)}
                    error={errors.transactionCommision?.message}
                />
                <SelectField
                    label="Currency"
                    registration={register('transactionCurrency')}
                    options={transactionCurrencyOptions}
                    error={errors.transactionCurrency?.message}
                />
            </div>

            {type === 'bond' && (
                <div className="grid grid-cols-3 gap-4 mb-3">
                    <Field
                        label="Bond Nominal"
                        type="number"
                        step="any"
                        registration={register('bondNominal', validations.bondNominal)}
                        error={errors.bondNominal?.message}
                    />
                    <Field
                        label="Accrued Interest"
                        type="number"
                        step="any"
                        registration={register('bondAccruedInterest', validations.bondAccruedInterest)}
                        error={errors.bondAccruedInterest?.message}
                    />
                </div>
            )}

            <TextareaField
                label="Notes"
                registration={register('notes', validations.notes)}
                error={errors.notes?.message}
                placeholder="You can add a comment for a transaction (optional)"
            />

            <div className="flex justify-end gap-3 mt-4">
                <Button type="button" onClick={onClose} variant="primaryTransparent">
                    Cancel
                </Button>
                <Button type="submit">Save Transaction</Button>
            </div>
        </form>
    )
}
