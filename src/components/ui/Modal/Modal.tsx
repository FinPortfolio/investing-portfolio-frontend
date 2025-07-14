'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { ModalProps } from './modal.types'
import { X } from 'lucide-react'

export function Modal({ isOpen, onClose, modalTitle, children }: ModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.body.style.overflow = ''
        }
    }, [isOpen, onClose])

    if (!isOpen || typeof window === 'undefined') return null

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
            <div
                className="flex flex-col gap-8 border-2 border-primaryLight rounded-md bg-modalBg p-layout max-w-[50%] w-full relative shadow-custom-green"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-8 right-8 text-white/80 hover:text-primaryLight">
                    <X />
                </button>
                <h2 className="text-lg text-white/80 text-center">{modalTitle}</h2>
                {children}
            </div>
        </div>,
        document.body,
    )
}
