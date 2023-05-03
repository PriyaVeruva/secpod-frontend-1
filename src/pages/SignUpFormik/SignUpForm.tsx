import { Form, Field, FormikHelpers, Formik } from 'formik';
import { Checkbox } from '@mui/material';
import './SignUpForm.scss';
import { validationSchema } from './SignUpValidationSchema';
import { useSelector, useDispatch } from 'react-redux';
import { FormFieldsData } from './data';
import { text } from 'utils/text.utils';
import TextFieldComponent from 'components/common/FormComponents/TextFieldComponent/TextField.component';
import PassWord from 'components/common/FormComponents/PasswordComponent/Password.component';import CustomButton from '../../components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';
type PropType = {
    padding: number;
    createAccount: boolean;
};
type UserState = {
    name: string;
    phoneNumber: string;
    email: string;
    companyName: string;
    password: string;
};

function SignUpForm({ padding, createAccount }: PropType): JSX.Element {
    const initialValues: UserState = {
        name: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        password: '',
    };

    const dispatch = useDispatch();
    const formData = useSelector((state: any) => state.user);
    console.log(formData, 'formData');

    function handleSubmit(values: UserState, { resetForm }: FormikHelpers<UserState>): void {
        console.log(values, 'values');
        dispatch({
            type: authSagaActions.AUTHENTICATE_USER,
            payload: values,
        });

        resetForm();
    }

    return (
        <div style={{ padding: `${padding}vh` }}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
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
                    <PassWord marginBottom={createAccount ? 72 : 0} />
                    {!createAccount && (
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
                    )}
                    <CustomButton
                        variant="contained"
                        type="submit"
                        fullWidth={true}
                        buttonText={'GET STARTED NOW'}
                        
                    />
                </Form>
            </Formik>
        </div>
    );
}

export default SignUpForm;
