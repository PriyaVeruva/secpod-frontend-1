import { Field, Form, Formik } from 'formik';
import styles from './ChangePwd.module.scss';
import AuthContainer from 'components/AuthContainer/AuthContainer.component';
import AuthHeader from 'components/common/AuthHeader/AuthHeader.component';
import CustomButton from 'components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import TextFieldComponent from 'components/common/FormComponents/TextFieldComponent/TextField.component';
import { ChangePwdType } from 'types/components/ChangePwd.type';
import { changePwdValidation } from 'utils/FormikValidationSchema.utils';

export default function ChangePwd(): JSX.Element {
    const initialValue = {
        newPwd: '',
        confirmPwd: '',
    };

    function handleSubmit(values: ChangePwdType): void {
        console.log(values);
    }
    return (
        <AuthContainer>
            <div className={styles.container}>
                <AuthHeader header={'Change Password'} />
                <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={changePwdValidation}>
                    <Form>
                        <div className={styles.inputField}>
                            <Field id="newPwd" name="newPwd">
                                {({ field, form: { errors, touched } }: any): JSX.Element => (
                                    <TextFieldComponent
                                        type="password"
                                        name="newPwd"
                                        label="New Password"
                                        field={field}
                                        form={{
                                            errors,
                                            touched,
                                        }}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className={styles.inputField}>
                            <Field id="confirmPwd" name="confirmPwd">
                                {({ field, form: { errors, touched } }: any): JSX.Element => (
                                    <TextFieldComponent
                                        type="password"
                                        name="confirmPwd"
                                        label="Confirm Password"
                                        field={field}
                                        form={{
                                            errors,
                                            touched,
                                        }}
                                    />
                                )}
                            </Field>
                        </div>
                        <div className={styles.btn}>
                            <CustomButton
                                buttonText="set new password"
                                type="submit"
                                variant="contained"
                                fullWidth={true}
                                from="forgotpwd"
                            />
                        </div>
                    </Form>
                </Formik>
            </div>
        </AuthContainer>
    );
}
