import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';
import SanerNowLogo from 'components/common/SanerNowLogo/SanerNowLogo.component';
import ResponseCode from 'enums/responseCode';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReduxStoreType } from 'types/store.type';
import Loader from 'components/Loader/Loader';
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
        if (respCode === ResponseCode.Success) {
            navigate('/login');
        } else {
            console.log('error');
        }
    }, []);

    return (
        <div>
            <SanerNowLogo size={42} />
            {respCode == ResponseCode.Success ? '' : <Loader />}
        </div>
    );
}
