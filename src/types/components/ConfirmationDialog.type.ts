import { ReactNode } from 'react';

export type ConfirmationDialogProps = {
    isOpen: boolean;
    title?: ReactNode;
    content: ReactNode;

    subContent?: ReactNode;
    buttonText: string;
    onClose: () => void;
    onSuccess?: () => void;
    onCancel?: () => void;
};
