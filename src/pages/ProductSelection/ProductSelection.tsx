import ProductSelectionComponent from 'components/ProductSelectionComponent/ProductSelectionComponent';
import ProductSelectionContainer from './ProductSelectionContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';
import { ReduxStoreType } from 'types/store.type';
function ProductSelection(): JSX.Element {
    const dispatch = useDispatch();
    const { respCode } = useSelector((store: ReduxStoreType) => store.user);
    console.log(respCode, 'respCode');

    useEffect(() => {
        dispatch({
            type: authSagaActions.GET_PRODUCTS,
        });
    }, []);
    return (
        <>
            <ProductSelectionComponent>
                <ProductSelectionContainer />
            </ProductSelectionComponent>
        </>
    );
}

export default ProductSelection;
