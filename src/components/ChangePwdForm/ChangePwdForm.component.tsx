import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Field, useFormikContext } from 'formik';
import styles from './ChangePwdForm.module.scss';
import TextFieldComponent from 'components/common/FormComponents/TextFieldComponent/TextField.component';
import ErrorComponent from 'components/common/FormComponents/ErrorComponent/Error.Component';
import CustomButton from 'components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import { text } from 'utils/text.utils';
import { ReduxStoreType } from 'types/store.type';
import ResponseCode from 'enums/responseCode';

type PropType = {
    err: boolean;
    setErr: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ChangePwdForm({ err, setErr }: PropType): JSX.Element {
    const { errors, touched } = useFormikContext();
    const { respCode, failureMessage } = useSelector((store: ReduxStoreType) => store.user);

    useEffect(() => {
        errors && touched && err && setErr(false);
    }, [errors]);

    return (
        <>
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
            {err && (
                <div className={styles.errContainer}>
                    <ErrorComponent>{text.forgotPwd.ERR_PWD_MISMATCH} </ErrorComponent>
                </div>
            )}
            {!err && respCode !== ResponseCode.Success && (
                <div className={styles.errContainer}>
                    <ErrorComponent>{failureMessage} </ErrorComponent>
                </div>
            )}

            <div className={styles.btn}>
                <CustomButton buttonText="set new password" type="submit" variant="contained" fullWidth={true} />
            </div>
        </>
    );
}
