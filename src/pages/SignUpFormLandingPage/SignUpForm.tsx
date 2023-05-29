import { Form, Field, Formik } from 'formik';
import { Checkbox } from '@mui/material';
import './SignUpForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { FormFieldsData } from './data';
import { text } from 'utils/text.utils';
import TextFieldComponent from 'components/common/FormComponents/TextFieldComponent/TextField.component';
import PassWord from 'components/common/FormComponents/PasswordComponent/Password.component';
import CustomButton from '../../components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';
import { validationSchema } from 'utils/FormikValidationSchema.utils';
import ResponseCode from 'enums/responseCode';
import ConfirmationDialog from 'components/common/ConfirmationDialog/ConfirmationDialog.component';
import { useEffect, useState } from 'react';
import { ReduxStoreType } from 'types/store.type';
import { setClearRespMessage } from 'redux/slices/authslice';
import ErrorComponent from 'components/common/FormComponents/ErrorComponent/Error.Component';
type PropType = {
    padding: number;
    createAccount: boolean;
};
type SignUpState = {
    name: string;
    phoneNumber: string;
    email: string;
    companyName: string;
    password: string;
};

function SignUpForm({ padding, createAccount }: PropType): JSX.Element {
    const initialValues: SignUpState = {
        name: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        password: '',
    };
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const { successMessage, failureMessage, respCode } = useSelector((state: ReduxStoreType) => state.user);
    useEffect(() => {
        dispatch(setClearRespMessage());
    }, []);
    function handleSubmit(values: SignUpState): void {
        dispatch(setClearRespMessage());

        dispatch({
            type: authSagaActions.SIGNUP_USER,
            payload: values,
        });
        setIsOpen(true);
    }
    function closeConfiramtionDialog(): void {
        setIsOpen(false);
    }

    function handleSuccessDialogMessage(): JSX.Element {
        return (
            <ConfirmationDialog
                title={text.forgotPwd.DIALOG_HEADER}
                content={successMessage}
                isOpen={isOpen}
                onClose={closeConfiramtionDialog}
                buttonText={'Done'}
            />
        );
    }

    return (
        <div style={{ padding: `${padding}vh` }}>
            {respCode === ResponseCode.Success && handleSuccessDialogMessage()}

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    {FormFieldsData.map((ele, i) => {
                        return (
                            <div style={{ margin: '1rem 0' }} key={i}>
                                <Field name={ele.name}>
                                    {({ field, form: { errors, touched } }: any): JSX.Element => (
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
                                {ele.name === 'email' && (
                                    <div className="errContainer">
                                        {respCode === ResponseCode.Failed &&
                                            failureMessage.toLowerCase().includes('email') && (
                                                <ErrorComponent>{failureMessage} </ErrorComponent>
                                            )}
                                    </div>
                                )}
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
                            <div>{text.landingPage.TERMS_CONDITIONS}</div>
                        </div>
                    )}
                    <CustomButton
                        variant="contained"
                        type="submit"
                        fullWidth={true}
                        buttonText={createAccount ? 'SIGN UP' : 'GET STARTED NOW'}
                    />
                </Form>
            </Formik>
        </div>
    );
}

export default SignUpForm;
