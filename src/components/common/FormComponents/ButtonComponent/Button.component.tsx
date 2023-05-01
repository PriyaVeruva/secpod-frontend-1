import { Button } from '@mui/material';
interface ButtonProps {
    buttonText: string;
    onClick: any;
    variant?: 'text' | 'outlined' | 'contained';
    className?: string;
    fullWidth?: boolean;
    style?: any;
    type?: 'button' | 'submit' | 'reset';
}
function ButtonComponent({
    variant,
    onClick,
    buttonText,
    fullWidth,
    className,
    type,
    style,
}: ButtonProps): JSX.Element {
    return (
        <Button
            variant={variant}
            onClick={onClick ? onClick : null}
            type={type}
            fullWidth={fullWidth}
            className={className}
            style={style}
        >
            {buttonText}
        </Button>
    );
}

export default ButtonComponent;
