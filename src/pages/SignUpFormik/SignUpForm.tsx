import { Form, Field, FormikHelpers, Formik } from 'formik';
import { Checkbox } from '@mui/material';
import './SignUpForm.scss';
import { validationSchema } from './SignUpValidationSchema';
import CustomButton from '../../components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails, UserState } from '../../redux/slices/authSlice';
import TextFieldComponent from '../../components/common/FormComponents/TextFieldComponent/TextField.component';
import PassWord from '../../components/common/FormComponents/PasswordComponent/Password.component';
import { FormFieldsData } from './data';
import { text } from 'utils/text.utils';

function SignUpForm(): JSX.Element {
    const dispatch = useDispatch();
    const formData = useSelector((state: any) => state.user);
    console.log(formData, 'formData');

    function handleSubmit(values: UserState, { resetForm }: FormikHelpers<UserState>): void {
        dispatch(setUserDetails(values));
        resetForm();
    }

    return (
        <div className="signUpFormContents">
            <Formik initialValues={formData} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    {FormFieldsData.map((ele, i) => {
                        return (
                            <div key={i}>
                                <Field name={ele.name}>
                                    {({ field, form: { errors, touched } }: any): any => (
                                        <TextFieldComponent
                                            type={ele.type}
                                            name={ele.name}
                                            label={ele.label}
                                            field={field}
                                            form={{
                                                errors,
                                                touched,
                                            }}
                                        />
                                    )}
                                </Field>
                            </div>
                        );
                    })}
                    <PassWord />
                    <div className="termsConditions">
                        <Checkbox
                            defaultChecked
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    fontSize: 28,
                                },
                            }}
                        />
                        <p>{text.landingPage.TERMS_CONDITIONS}</p>
                    </div>
                    <CustomButton
                        variant="contained"
                        type="submit"
                        fullWidth={true}
                        buttonText={'GET STARTED NOW'}
                        onClick={''}
                    />
                </Form>
            </Formik>
        </div>
    );
}

export default SignUpForm;
