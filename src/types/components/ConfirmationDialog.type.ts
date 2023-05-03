import { ReactNode } from 'react';

export type ConfirmationDialogProps = {
  isOpen: boolean;
  title?: ReactNode;
  content: ReactNode;
  onClose: () => void;
  onSuccess?: () => void;
  onCancel?: () => void;
};
