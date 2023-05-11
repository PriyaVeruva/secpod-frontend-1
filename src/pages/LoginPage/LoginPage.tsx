import styles from './LoginPage.module.scss';
import AuthContainer from 'components/AuthContainer/AuthContainer.component';
import AuthHeader from 'components/common/AuthHeader/AuthHeader.component';
import { Formik, Form, Field } from 'formik';
import PassWord from '../../components/common/FormComponents/PasswordComponent/Password.component';
import TextFieldComponent from 'components/common/FormComponents/TextFieldComponent/TextField.component';
import AuthFooter from 'components/common/AuthFooter/AuthFooter.component';
import { text } from 'utils/text.utils';
import CustomButton from 'components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import { useDispatch, useSelector } from 'react-redux';
import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';
import ResponseCode from 'enums/responseCode';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/routes.utils';
import { loginValidation } from 'utils/FormikValidationSchema.utils';
import ErrorComponent from 'components/common/FormComponents/ErrorComponent/Error.Component';

type PropType = {
    email: string;
    password: string;
};

export default function LoginPage(): JSX.Element {
    const initialValues: PropType = {
        email: '',
        password: '',
    };

    const dispatch = useDispatch();
    const { failureMessage, respCode } = useSelector((state: any) => state.user);
    const handleSubmit = (values: PropType): void => {
        dispatch({
            type: authSagaActions.LOGIN_USER,
            payload: values,
        });
    };

    return (
        <AuthContainer>
            <div>
                <AuthHeader header={'Login to SanerNow'} />
                <Formik initialValues={initialValues} validationSchema={loginValidation} onSubmit={handleSubmit}>
                    <Form>
                        <div style={{ margin: '1rem 0' }}>
                            <Field name={'email'}>
                                {({ field, form: { errors, touched } }: any): JSX.Element => (
                                    <TextFieldComponent
                                        type={'email'}
                                        name={'email'}
                                        label={'Email'}
                                        field={field}
                                        form={{
                                            errors,
                                            touched,
                                        }}
                                    />
                                )}
                            </Field>
                            <div className={styles.errorMessage}>
                                {respCode === ResponseCode.Failed &&
                                    !failureMessage.toLowerCase().includes('password') && (
                                        <ErrorComponent>{failureMessage} </ErrorComponent>
                                    )}
                            </div>
                        </div>

                        <PassWord marginBottom={0} />
                        <div className={styles.errorMessage}>
                            {respCode === ResponseCode.Failed && failureMessage.toLowerCase().includes('password') && (
                                <ErrorComponent>{failureMessage} </ErrorComponent>
                            )}
                        </div>

                        <div className={styles.forgotPassword}>
                            <Link to={ROUTES.forgotPwd}>{text.loginPage.FORGOT_PASSWORD}</Link>
                        </div>
                        <CustomButton variant="contained" type="submit" fullWidth={true} buttonText={'LOG IN'} />

                        <AuthFooter footerBody={text.loginPage.AUTH_FOOTER_HEADER} linkTo="signup" />
                    </Form>
                </Formik>
            </div>
        </AuthContainer>
    );
}
