import ProductSelectionComponent from 'components/ProductSelectionComponent/ProductSelectionComponent';
import ProductSelectionContainer from './ProductSelectionContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';
function ProductSelection(): JSX.Element {
    const dispatch = useDispatch();

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
