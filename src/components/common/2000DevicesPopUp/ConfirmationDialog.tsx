import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styles from '../ConfirmationDialog/ConfirmationDialog.module.scss';
import CustomButton from '../FormComponents/CustomButtonComponent/CustomButton.component';
import muiConfirmationDialogStyles from 'muiStyles/confirmationDialog.styles';
import { ConfirmationDialogProps } from 'types/components/ConfirmationDialog.type';
import { DialogContentText } from '@mui/material';

export default function ConfirmationDialog({
    isOpen,
    title,
    content,
    onClose,
    buttonText,
    subContent,
}: ConfirmationDialogProps): JSX.Element {
    const updatedStyles = {
        padding: '1vh',
        ...muiConfirmationDialogStyles,
    };

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            PaperProps={{
                sx: updatedStyles,
            }}
            sx={updatedStyles}
            className={styles.dialogContainer}
        >
            {title && (
                <DialogTitle className={subContent ? styles.devicesDialogTitle : styles.billingDialogTitle}>
                    {title}
                </DialogTitle>
            )}
            <DialogContent
                data-testid="dialog-content"
                className={subContent ? styles.devicesDialogContent : styles.billingDialogContent}
            >
                <span>{content}</span>
                {subContent && (
                    <DialogContentText className={subContent ? styles.devicesSubContent : ''}>
                        {subContent}
                    </DialogContentText>
                )}
                <div className={styles.actionBtns}>
                    <CustomButton
                        buttonText={buttonText}
                        variant="contained"
                        type="button"
                        onClick={onClose}
                        from={'devicesSmallButton'}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
