import { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import styles from './ForgotPwd.module.scss';
import CustomButton from 'components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import AuthContainer from 'components/AuthContainer/AuthContainer.component';
import TextFieldComponent from 'components/common/FormComponents/TextFieldComponent/TextField.component';
import ConfirmationDialog from 'components/common/ConfirmationDialog/ConfirmationDialog.component';
import { forgotPwdValidation } from 'pages/SignUpFormik/SignUpValidationSchema';
import { text } from 'utils/text.utils';

type FormType = {
    email: string;
};

export default function ForgotPwd(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const intitialValue = {
        email: '',
    };

    function closeConfiramtionDialog(): void {
        setIsOpen(false);
    }

    function handleSubmit(values: FormType): void {
        console.log('form submitted', values);
        setIsOpen(true);
    }
    return (
        <AuthContainer>
            <ConfirmationDialog
                isOpen={isOpen}
                onClose={closeConfiramtionDialog}
                title={text.forgotPwd.DIALOG_HEADER}
                content={text.forgotPwd.DIALOG_CONTENT}
            />
            <div className={styles.container}>
                <h2 className={styles.container_header}>Forgot Password</h2>
                <Formik initialValues={intitialValue} onSubmit={handleSubmit} validationSchema={forgotPwdValidation}>
                    <Form>
                        <label className={styles.label}>Enter the registered email account</label>
                        <Field id="email" name="email">
                            {({ field, form: { errors, touched } }: any): JSX.Element => (
                                <TextFieldComponent
                                    type="email"
                                    name="email"
                                    label="Email"
                                    field={field}
                                    form={{
                                        errors,
                                        touched,
                                    }}
                                />
                            )}
                        </Field>
                        <div className={styles.btn}>
                            <CustomButton
                                buttonText="Submit"
                                type="submit"
                                variant="contained"
                                fullWidth={true}
                                from="forgotpwd"
                            />
                        </div>
                    </Form>
                </Formik>
                <div className={styles.container_signup}>
                    Dont have SanerNow account? <span>Sign up</span>
                </div>
            </div>
        </AuthContainer>
    );
}
