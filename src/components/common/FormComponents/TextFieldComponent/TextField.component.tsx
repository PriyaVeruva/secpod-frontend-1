import { TextField } from '@mui/material';
import { setClearRespMessage } from 'redux/slices/authslice';
import { muiTextFieldStyles } from 'muiStyles/TextFieldComponent.styles';
import { useDispatch, useSelector } from 'react-redux';
import { TextFieldInputProps } from 'types/components/TextField.type';
import { ReduxStoreType } from 'types/store.type';
import { useEffect } from 'react';

function TextFieldComponent({
    type,
    name,
    label,
    field,
    form,
    endAdornment,
    startAdornment,
    placeholder,
    sx,
}: TextFieldInputProps): JSX.Element {
    const hasError = form.touched[field.name] && Boolean(form.errors[field.name]) ? true : false;
    const dispatch = useDispatch();
    const { failureMessage } = useSelector((store: ReduxStoreType) => store.user);

    useEffect(() => {
        hasError && failureMessage && dispatch(setClearRespMessage());
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
                sx={sx ? sx && muiTextFieldStyles.profileDetails : muiTextFieldStyles.default}
                helperText={hasError ? form.errors[field.name] : null}
                InputProps={{
                    endAdornment: endAdornment,
                    startAdornment: startAdornment,
                }}
                placeholder={placeholder}
            />
        </div>
    );
}
export default TextFieldComponent;
