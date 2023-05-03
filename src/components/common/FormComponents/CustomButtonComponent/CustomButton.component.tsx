import { Button } from '@mui/material';
import styles from './CustomButton.module.scss';
import { muiButtonStyles } from 'muiStyles/customButton.styles';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    buttonText: string;
    variant?: 'text' | 'outlined' | 'contained';
    type?: 'button' | 'submit' | 'reset';
    from?: 'footer' | 'forgotpwd';
    onClick: any;
    fullWidth?: boolean;
}
function CustomButton(props: ButtonProps): JSX.Element {
    const { variant, onClick, buttonText, fullWidth, type, disabled, from } = props;
    return (
        <Button
            variant={variant}
            onClick={onClick ? onClick : null}
            type={type}
            fullWidth={fullWidth}
            disabled={disabled}
            sx={variant === 'contained' && !disabled ? muiButtonStyles.greenBtn : null}
            className={from && styles[from]}
        >
            {buttonText}
        </Button>
    );
}

export default CustomButton;
