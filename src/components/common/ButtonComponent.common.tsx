import { Button } from '@mui/material';



function ButtonComponent({ variant, onClick, buttonText, fullWidth, className, type, style }: any): JSX.Element {
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
