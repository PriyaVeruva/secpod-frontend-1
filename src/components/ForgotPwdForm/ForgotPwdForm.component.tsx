import ErrorComponent from 'components/common/FormComponents/ErrorComponent/Error.Component';
import styles from './ForgotPwdForm.module.scss';
import CustomButton from 'components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import TextFieldComponent from 'components/common/FormComponents/TextFieldComponent/TextField.component';
import { Field } from 'formik';
import { text } from 'utils/text.utils';
import { useSelector } from 'react-redux';
import { ReduxStoreType } from 'types/store.type';
import ResponseCode from 'enums/responseCode';

export default function ForgotPwdForm(): JSX.Element {
    const { respCode, failureMessage } = useSelector((store: ReduxStoreType) => store.user);
    return (
        <div className={styles.formContainer}>
            <label className={styles.label}>{text.forgotPwd.LABEL} </label>
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
            <div className={styles.errContainer}>
                {respCode === ResponseCode.Failed && <ErrorComponent>{failureMessage} </ErrorComponent>}
            </div>
            <div className={styles.btn}>
                <CustomButton buttonText="Submit" type="submit" variant="contained" fullWidth={true} />
            </div>
        </div>
    );
}
