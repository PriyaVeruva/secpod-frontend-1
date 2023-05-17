import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';
import ResponseCode from 'enums/responseCode';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReduxStoreType } from 'types/store.type';
import { text } from 'utils/text.utils';
import ConfirmationDialog from 'components/common/ConfirmationDialog/ConfirmationDialog.component';
import styles from './RedirectPage.module.scss';
export default function RedirectPage(): JSX.Element {
    const [isOpen, setIsOpen] = useState(true);

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

    function closeConfiramtionDialog(): void {
        if (respCode === ResponseCode.Success) {
            setIsOpen(false);
            navigate('/login');
        } else {
            console.log('error');
        }
    }

    function handleSuccessDialogMessage(): JSX.Element {
        return (
            <ConfirmationDialog
                title={text.verifyEmailPage.AUTH_HEADER}
                content={text.verifyEmailPage.SUCCESS_MESSAGE}
                isOpen={isOpen}
                onClose={closeConfiramtionDialog}
                buttonText={true}
            />
        );
    }
    return (
        <div className={styles.topContainer}>
            <div className={styles.container}>{respCode === ResponseCode.Success && handleSuccessDialogMessage()}</div>
        </div>
    );
}
