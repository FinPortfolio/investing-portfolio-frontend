import type { ModalProps } from '../../../../ui/modal/modal.types'

export interface IQuickActionItem {
    id: string
    label: string
    modal: React.ComponentType<ModalProps>
}
