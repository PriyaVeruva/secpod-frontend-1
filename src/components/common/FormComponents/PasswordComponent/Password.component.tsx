import { useState } from 'react';
import { Field } from 'formik';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import TextFieldComponent from '../TextFieldComponent/TextField.component';
type PropType={
    marginBottom:number;
}
function PassWord({marginBottom}:PropType): JSX.Element {
    interface InputFieldProps {
        field: {
            name: string;
        };
        form: {
            touched: { [key: string]: boolean };
            errors: { [key: string]: string };
        };
    }
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = (): void => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: any): void => {
        event.preventDefault();
    };
    return (
        <div style={{marginBottom:`${marginBottom}px`}}>
            <Field name="password">
                {({ field, form: { errors, touched } }: InputFieldProps): JSX.Element => (
                    <TextFieldComponent
                        name="password"
                        label="Password"
                        field={field}
                        form={{
                            errors,
                            touched,
                        }}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                )}
            </Field>
        </div>
    );
}

export default PassWord;
