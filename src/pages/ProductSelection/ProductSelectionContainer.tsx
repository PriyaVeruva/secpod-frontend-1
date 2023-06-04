import { text } from 'utils/text.utils';
import image1 from '../../assets/images/facebook.png';
import CustomButton from 'components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import styles from './ProductSelection.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSagaActions } from 'redux/sagas/sagaActions/auth.actions';
import { ReduxStoreType } from 'types/store.type';
import ResponseCode from 'enums/responseCode';
export default function ProductSelectionContainer(): JSX.Element {
    const [isHovered, setIsHovered] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const state = useSelector((state: ReduxStoreType) => state.user);
    const getProductsData = state.userDetails.getProducts;
    const handleMouseEnter = (i: any): void => {
        setIsHovered(i);
    };
    const handleMouseLeave = (): void => {
        setIsHovered(null);
    };

    const handleSelectProduct = (id: number): void => {
        dispatch({
            type: authSagaActions.SELECT_PRODUCTS,
            payload: id,
        });
        // need to change later
        if (state.respCode === ResponseCode.Success) {
            navigate('/plan-selection/0');
        }
    };

    return (
        <div className={styles.productSelectionContainer}>
            <h2 className={styles.headerContent}>{text.productSelection.HEADER_CONTENT}</h2>

            <div className={styles.productSelection}>
                {getProductsData.map((ele: any, i): any => {
                    return (
                        <div
                            className={styles.cards}
                            key={ele.id}
                            onMouseEnter={(): void => handleMouseEnter(i)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={styles.cardHeaderContent}>
                                <img className={styles.image} src={image1} alt="" />
                                <span>{ele.name}</span>
                            </div>
                            <div className={'featuresText'}>Features</div>
                            <div className="features">
                                {ele.productFeatures.map((ele: any): any => {
                                    return (
                                        <div className={'contents'} key={ele.id}>
                                            <div className={'circleWithTick'}></div>
                                            <span>{ele.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            <CustomButton
                                variant={isHovered === i ? 'contained' : 'outlined'}
                                type="submit"
                                fullWidth={true}
                                buttonText={'Select'}
                                from="productFooter"
                                onClick={(): void => handleSelectProduct(ele.id)}
                                icons={true}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
