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

    const inlineStylingErrors = {
        color: '#d32f2f',
        marginInline: ' 14px',
        lineHeight: '1.66',
        letterSpacing: '0.03333em',
    };
    return (
        <AuthContainer>
            <div>
                <AuthHeader header={'Login to SanerNow'} />
                <Formik initialValues={initialValues} validationSchema={loginValidation} onSubmit={handleSubmit}>
                    <Form>
                        <div style={{ margin: '1rem 0' }}>
                            <Field name={'email'}>
                                {({ field, form: { errors, touched } }: any): any => (
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
                            {respCode === ResponseCode.Failed && !failureMessage.toLowerCase().includes('password') && (
                                <span style={inlineStylingErrors}>{failureMessage}</span>
                            )}
                        </div>

                        <PassWord marginBottom={0} />
                        {respCode === ResponseCode.Failed && failureMessage.toLowerCase().includes('password') && (
                            <span style={inlineStylingErrors}>{failureMessage}</span>
                        )}
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
