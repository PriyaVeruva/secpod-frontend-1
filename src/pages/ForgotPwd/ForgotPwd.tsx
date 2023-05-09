import { useState } from 'react';
import { Form, Formik } from 'formik';
import styles from './ForgotPwd.module.scss';
import AuthContainer from 'components/AuthContainer/AuthContainer.component';
import ConfirmationDialog from 'components/common/ConfirmationDialog/ConfirmationDialog.component';
import AuthHeader from 'components/common/AuthHeader/AuthHeader.component';
import AuthFooter from 'components/common/AuthFooter/AuthFooter.component';
import { text } from 'utils/text.utils';
import { forgotPwdValidation } from 'utils/FormikValidationSchema.utils';
import { useDispatch } from 'react-redux';
import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';
import ForgotPwdForm from 'components/ForgotPwdForm/ForgotPwdForm.component';

type FormType = {
    email: string;
};

export default function ForgotPwd(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const intitialValue = {
        email: '',
    };
    const dispatch = useDispatch();

    function closeConfiramtionDialog(): void {
        setIsOpen(false);
    }

    function handleSubmit(values: FormType): void {
        dispatch({
            type: authSagaActions.SEND_FORGOT_PWD,
            payload: values,
        });
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
                <AuthHeader header={'Forgot Password'} />
                <Formik initialValues={intitialValue} onSubmit={handleSubmit} validationSchema={forgotPwdValidation}>
                    <Form>
                        <ForgotPwdForm />
                    </Form>
                </Formik>
                <AuthFooter footerBody={text.forgotPwd.NAV_SIGNIN} linkTo="signup" />
            </div>
        </AuthContainer>
    );
}
