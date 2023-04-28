import { TextField } from '@mui/material';
function TextFieldComponent({ type, name, label, field, form: { touched, errors }, endAdornment }: any): JSX.Element {
    const hasError = touched[field.name] && Boolean(errors[field.name]);

    return (
        <div>
            <TextField
                {...field}
                type={type}
                name={name}
                label={label}
                variant="outlined"
                fullWidth={true}
                error={hasError}
                helperText={hasError ? errors[field.name] : undefined}
                InputLabelProps={{
                    style: {
                        fontSize: '24px',
                        color: 'var(--darkPara)',
                        fontFamily: 'Futura-Medium',
                    },
                }}
                InputProps={{
                    style: {
                        color: touched[name] && errors[name] && 'var(--error)',
                    },
                    endAdornment: endAdornment,
                }}
            />
        </div>
    );
}

export default TextFieldComponent;
