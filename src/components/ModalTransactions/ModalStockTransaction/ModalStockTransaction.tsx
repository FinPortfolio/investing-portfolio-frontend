'use client'

import { Modal } from '../../ui/modal/Modal'
import { Field } from '../../ui/form/field/Field'
import { SelectField } from '../../ui/form/selectField/SelectField'
import { TextareaField } from '../../ui/form/textareaField/TextareaField'
// import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { transactionTypeOptions, transactionCurrencyOptions } from '../transactions.options'
import { formatDateToInput } from '../../../utils/helper'

type Props = {
    isOpen: boolean
    onClose: () => void
    modalTitle: string
}

interface IModalStock {
    symbolID: string
    transactionType: string
    transactionCurrency: string
    transactionDate: string
    initialPrice: number
    transactionCommision: number
    transactionQuantity: number
    notes: string
}

export function ModalStockTransaction({ isOpen, onClose, modalTitle }: Props) {
    const today = formatDateToInput(new Date())

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IModalStock>({
        mode: 'onChange',
        defaultValues: {
            transactionType: 'buy',
            transactionCurrency: 'US Dollar',
            transactionDate: today,
            initialPrice: 0,
            transactionCommision: 0,
            transactionQuantity: 1,
        },
    })

    const onSubmit: SubmitHandler<IModalStock> = (data) => {
        console.log(data)
    }
    const handleClose = () => {
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} modalTitle={modalTitle}>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <Field
                    label="Asset ID"
                    type="text"
                    registration={register('symbolID', { required: 'Asset ID is required' })}
                    error={errors.symbolID?.message}
                />
                <div className="grid grid-cols-3 gap-4">
                    {' '}
                    <SelectField
                        label="Transaction"
                        registration={register('transactionType')}
                        options={transactionTypeOptions}
                        error={errors.transactionType?.message}
                    />{' '}
                    <Field
                        label="Quantity"
                        type="number"
                        registration={register('transactionQuantity', {
                            required: 'Quantity is required',
                            valueAsNumber: true,
                            min: { value: 1, message: 'Quantity must be at least 1' },
                        })}
                        error={errors.transactionQuantity?.message}
                    />
                    <Field
                        label="Date"
                        type="date"
                        registration={register('transactionDate', { required: 'Transaction date is required' })}
                        error={errors.transactionDate?.message}
                    />{' '}
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <Field
                        label="Price"
                        type="number"
                        registration={register('initialPrice', {
                            required: 'Initial price is required',
                            valueAsNumber: true,
                            min: { value: 0, message: 'Price must be non-negative' },
                        })}
                        error={errors.initialPrice?.message}
                    />
                    <Field
                        label="Commission"
                        type="number"
                        registration={register('transactionCommision', {
                            required: 'Commission is required',
                            valueAsNumber: true,
                            min: { value: 0, message: 'Commission must be non-negative' },
                        })}
                        error={errors.transactionCommision?.message}
                    />{' '}
                    <SelectField
                        label="Currency"
                        registration={register('transactionCurrency')}
                        options={transactionCurrencyOptions}
                        error={errors.transactionCurrency?.message}
                    />
                </div>
                <TextareaField
                    label="Notes"
                    registration={register('notes')}
                    error={errors.notes?.message}
                    placeholder="You can add a comment for a transaction (optional)"
                />
                {/* Тестовые кнопки */}
                <div className="flex justify-end gap-3 mt-4">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="px-4 py-2 text-white/80 border border-white/20 rounded hover:border-white/40 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-primaryLight text-bg rounded hover:bg-primaryLight/80 transition-colors"
                    >
                        Save Transaction
                    </button>
                </div>
            </form>
        </Modal>
    )
}
