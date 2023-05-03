import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './ConfirmationDialog.module.scss';
import CustomButton from '../FormComponents/CustomButtonComponent/CustomButton.component';
import muiConfirmationDialogStyles from 'muiStyles/confirmationDialog.styles';
import { ConfirmationDialogProps } from 'types/components/ConfirmationDialog.type';

export default function ConfirmationDialog({ isOpen, title, content, onClose }: ConfirmationDialogProps): JSX.Element {
    // const handldeClickYes = (): void => {
    //     onSuccess();
    //     onClose();
    // };
    return (
        <Dialog open={isOpen} onClose={onClose} sx={muiConfirmationDialogStyles}>
            {title && <DialogTitle className={styles.dialogTitle}>{title}</DialogTitle>}
            <DialogContent data-testid="dialog-content" className={styles.dialogContent}>
                {content}
                <div className={styles.actionBtns}>
                    <CustomButton
                        fullWidth={true}
                        buttonText="Done"
                        variant="contained"
                        type="button"
                        onClick={onClose}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
