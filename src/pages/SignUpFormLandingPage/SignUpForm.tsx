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
import { useState } from 'react';
import { ReduxStoreType } from 'types/store.type';
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
    const [isOpen, setIsOpen] = useState(true);
    const dispatch = useDispatch();
    const { successMessage, failureMessage, respCode } = useSelector((state: ReduxStoreType) => state.user);

    function handleSubmit(values: SignUpState): void {
        dispatch({
            type: authSagaActions.SIGNUP_USER,
            payload: values,
        });
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
            />
        );
    }
    function handleErrorDialogMessage(): JSX.Element {
        return (
            <ConfirmationDialog
                title={text.error.DIALOG_HEADER}
                content={failureMessage}
                isOpen={isOpen}
                onClose={closeConfiramtionDialog}
            />
        );
    }
    return (
        <div style={{ padding: `${padding}vh` }}>
            {respCode === ResponseCode.Success && handleSuccessDialogMessage()}
            {respCode === ResponseCode.Failed && handleErrorDialogMessage()}

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
                    <CustomButton variant="contained" type="submit" fullWidth={true} buttonText={'GET STARTED NOW'} />
                </Form>
            </Formik>
        </div>
    );
}

export default SignUpForm;
