import { Field } from 'formik';
import TextFieldComponent from 'components/common/FormComponents/TextFieldComponent/TextField.component';
import { FormFieldsData } from './data';
import { InputAdornment } from '@mui/material';

function ProfileDetailsFormik(): JSX.Element {
    return (
        <div>
            {FormFieldsData.map((ele, i) => {
                return (
                    <div style={{ margin: '1rem 0' }} key={i}>
                        <Field key={i} name={ele.name}>
                            {({ field, form: { errors, touched } }: any): JSX.Element => (
                                <TextFieldComponent
                                    type={ele.type}
                                    name={ele.name}
                                    placeholder={ele.placeholder}
                                    field={field}
                                    form={{
                                        errors,
                                        touched,
                                    }}
                                    startAdornment={<InputAdornment position="end">{ele.icon}</InputAdornment>}
                                    label={''}
                                    sx={true}
                                />
                            )}
                        </Field>
                    </div>
                );
            })}
        </div>
    );
}

export default ProfileDetailsFormik;
