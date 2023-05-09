import { Form, Formik } from 'formik';
import AuthContainer from 'components/AuthContainer/AuthContainer.component';
import AuthHeader from 'components/common/AuthHeader/AuthHeader.component';
import { ChangePwdType } from 'types/components/ChangePwd.type';
import { changePwdValidation } from 'utils/FormikValidationSchema.utils';
import { validatePassword } from 'utils/validatePwd.utils';
import { useState } from 'react';
import ChangePwdForm from 'components/ChangePwdForm/ChangePwdForm.component';
import { updatePwd } from 'api/changePwd.api';
import { useLocation } from 'react-router-dom';
import ResponseCode from 'enums/responseCode';
import { useDispatch } from 'react-redux';
import { setFailureData, setSuccessData } from 'redux/slices/authslice';

export default function ChangePwd(): JSX.Element {
    const initialValue = {
        newPwd: '',
        confirmPwd: '',
    };

    const [err, setErr] = useState(false);
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const myQueryParam = searchParams.get('authorization');

    function handleSubmit(values: ChangePwdType): void {
        setErr(false);
        const isPwdValid = validatePassword(values.newPwd, values.confirmPwd);
        if (!isPwdValid) {
            setErr(true);
        } else {
            (async function (): Promise<void> {
                try {
                    const resp = await updatePwd(values.newPwd, myQueryParam);
                    if (resp.data.code === ResponseCode.Success) {
                        dispatch(setSuccessData(resp.data));
                    } else {
                        dispatch(setFailureData(resp.data));
                    }
                } catch (err) {
                    console.log(err);
                }
            })();
        }
    }
    return (
        <AuthContainer>
            <div>
                <AuthHeader header={'Change Password'} />
                <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={changePwdValidation}>
                    <Form>
                        <ChangePwdForm err={err} setErr={setErr} />
                    </Form>
                </Formik>
            </div>
        </AuthContainer>
    );
}
