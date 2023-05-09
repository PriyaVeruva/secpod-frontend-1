import { TextField } from '@mui/material';
import { setClearStore } from 'redux/slices/authslice';
import { muiTextFieldStyles } from 'muiStyles/TextFieldComponent.styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TextFieldInputProps } from 'types/components/TextField.type';

function TextFieldComponent({ type, name, label, field, form, endAdornment }: TextFieldInputProps): JSX.Element {
    const hasError = form.touched[field.name] && Boolean(form.errors[field.name]);
    const dispatch = useDispatch();
    useEffect(() => {
        if (hasError) {
            dispatch(setClearStore());
        }
    }, [hasError]);
    return (
        <div>
            <TextField
                {...field}
                type={type}
                name={name}
                label={label}
                variant="outlined"
                autoComplete="off"
                fullWidth={true}
                error={hasError}
                sx={muiTextFieldStyles.default}
                helperText={hasError ? form.errors[field.name] : undefined}
                InputProps={{
                    // style: {
                    //     color: form.touched[name] && form.errors[name] ? '#db7f72' : undefined,
                    // },
                    endAdornment: endAdornment,
                }}
            />
        </div>
    );
}
export default TextFieldComponent;
