import type { ModalProps } from '../../../../ui/Modal/modal.types'

export interface IQuickActionItem {
    id: string
    label: string
    modal: React.ComponentType<ModalProps>
}
