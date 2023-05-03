import styles from './LoginPage.module.scss';
import AuthContainer from 'components/AuthContainer/AuthContainer.component';
import AuthHeader from 'components/common/AuthHeader/AuthHeader';
import { validationSchema } from '../SignUpFormik/SignUpValidationSchema';
import { Formik, Form, Field } from 'formik';
import PassWord from '../../components/common/FormComponents/PasswordComponent/Password.component';
import { useSelector } from 'react-redux';
import TextFieldComponent from 'components/common/FormComponents/TextFieldComponent/TextField.component';
import ButtonComponent from 'components/common/FormComponents/ButtonComponent/Button.component';
import AuthFooter from 'components/common/AuthFooter/AuthFooter';
import { text } from 'utils/text.utils';
export default function LoginPage(): JSX.Element {
    const handleSubmit = (): void => {
        console.log('hlo');
    };
    const formData = useSelector((state: any) => state.user);
    console.log(formData, 'formData');
    return (
        <AuthContainer>
            <div>
                <AuthHeader header={'Login to SanerNow'} />
                <Formik initialValues={formData} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    <Form>
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
                        <PassWord marginBottom={0} />
                        <div className={styles.forgotPassword}>{text.loginPage.FORGOT_PASSWORD}</div>
                        <ButtonComponent
                            variant="contained"
                            type="submit"
                            fullWidth={true}
                            buttonText={'LOG IN'}
                            onClick={''}
                        />

                        <AuthFooter footerBody={text.loginPage.AUTH_FOOTER_HEADER} linkTo="Sign up" />
                    </Form>
                </Formik>
            </div>
        </AuthContainer>
    );
}
