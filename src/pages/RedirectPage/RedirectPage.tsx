import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';
import ResponseCode from 'enums/responseCode';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReduxStoreType } from 'types/store.type';
import { text } from 'utils/text.utils';
import styles from './RedirectPage.module.scss';
import CustomButton from 'components/common/FormComponents/CustomButtonComponent/CustomButton.component';
export default function RedirectPage(): JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const emailQuery = searchParams.get('email');
    const { respCode } = useSelector((store: ReduxStoreType) => store.user);

    useEffect(() => {
        dispatch({
            type: authSagaActions.VERIFY_EMAIL,
            payload: emailQuery,
        });
    }, []);

    const handleVerifyEmail = (): void => {
        if (respCode !== ResponseCode.Success) {
            navigate('/login');
        } else {
            console.log('error');
        }
    };
    return (
        <div className={styles.topContainer}>
            <div className={styles.container}>
                {respCode !== ResponseCode.Success && (
                    <div className={styles.container_dialog}>
                        <div className={styles.container_titleContent}>{text.verifyEmailPage.AUTH_HEADER}</div>
                        <div className={styles.container_subContent}>{text.verifyEmailPage.SUCCESS_MESSAGE}</div>
                        <CustomButton
                            buttonText={'LOGIN'}
                            variant="contained"
                            type="button"
                            from={'smallButton'}
                            onClick={handleVerifyEmail}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
