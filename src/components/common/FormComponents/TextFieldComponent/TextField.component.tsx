import { TextField } from '@mui/material';
import { clearRespMessage } from 'redux/slices/authSlice';
import { muiTextFieldStyles } from 'muiStyles/TextFieldComponent.styles';
import { useDispatch, useSelector } from 'react-redux';
import { TextFieldInputProps } from 'types/components/TextField.type';
import { ReduxStoreType } from 'types/store.type';

function TextFieldComponent({ type, name, label, field, form, endAdornment }: TextFieldInputProps): JSX.Element {
    const hasError = form.touched[field.name] && Boolean(form.errors[field.name]) ? true : false;
    const dispatch = useDispatch();
    const { failureMessage } = useSelector((store: ReduxStoreType) => store.user);

    hasError && failureMessage && dispatch(clearRespMessage());

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
                helperText={hasError ? form.errors[field.name] : null}
                InputProps={{
                    endAdornment: endAdornment,
                }}
            />
        </div>
    );
}
export default TextFieldComponent;
