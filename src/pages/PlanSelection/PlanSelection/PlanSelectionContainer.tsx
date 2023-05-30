import ProductSelectionComponent from 'components/ProductSelectionComponent/ProductSelectionComponent';
import styles from './PlanSelection.module.scss';
import StepperComponent from 'components/common/Stepper/StepperComponent';
import { text } from 'utils/text.utils';
import PlanSectionCards from './PlanSectionCards';
import { cardContainerData2 } from 'pages/LandingPage/data';
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import SubscriptionPlans from 'enums/subscriptionPlans';
import ErrorComponent from 'components/common/FormComponents/ErrorComponent/Error.Component';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxStoreType } from 'types/store.type';
import { setClearRespMessage, setDevices } from 'redux/slices/authslice';

function PlanSelectionContainer(): JSX.Element {
    const [subscriptionState, setSubscriptionState] = useState(SubscriptionPlans.Monthly);
    const state = useSelector((state: ReduxStoreType) => state.user);
    const devicesValue = state.userDetails.devices;
    const devices = parseInt(devicesValue);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setClearRespMessage());
    }, []);
    const handleChange = (e: any): void => {
        dispatch({
            type: setDevices,
            payload: parseInt(e.target.value),
        });
    };

    const handleToggleChange = (): void => {
        setSubscriptionState((prevState) =>
            prevState === SubscriptionPlans.Monthly ? SubscriptionPlans.Annually : SubscriptionPlans.Monthly,
        );
    };

    return (
        <ProductSelectionComponent>
            <div className={styles.planSelection}>
                <StepperComponent />
                <div className={styles.contentSection}>
                    <h2>{text.planSelection.HEADER_CONTENT}</h2>
                    <p>{text.planSelection.PARAGRAPH_CONTENT}</p>
                </div>
            </div>
            <div className={styles.devicesContainer}>
                <div className={styles.devicesSubContainer}>
                    <div className={styles.contents}>
                        <p>{text.planSelection.DEVICES_PARAGRAPH_CONTENT}</p>
                        <div
                            style={{
                                backgroundColor: '#f9f9f9',
                            }}
                        >
                            <TextField
                                label={'Devices'}
                                value={devicesValue}
                                onChange={handleChange}
                                name="devices"
                                type="number"
                                fullWidth
                            />
                            {devices === 0 && <ErrorComponent>{'Devices cant be Zero'}</ErrorComponent>}
                        </div>
                    </div>
                </div>

                <div className={styles.devicesSubscription}>
                    <div className={styles.subscriptionToggle}>
                        <span>Monthly</span>
                        <div
                            className={`${styles.customSwitch} ${
                                subscriptionState === SubscriptionPlans.Annually ? styles.active : ''
                            }`}
                            onClick={handleToggleChange}
                        >
                            <div className={styles.circleSlide}></div>
                        </div>
                        <span>Annually</span>
                    </div>
                </div>
            </div>
            <div className={styles.planSelectionCards}>
                <div className={styles.cardContainer}>
                    {cardContainerData2.map((ele, i): any => {
                        return (
                            <PlanSectionCards
                                key={i}
                                heading={ele.heading}
                                subHeading={ele.subHeading}
                                featuresText={ele.featuresText}
                                id={ele.id}
                                features={ele.features}
                                devices={devices}
                                subscriptionState={subscriptionState}
                            />
                        );
                    })}
                </div>
            </div>
        </ProductSelectionComponent>
    );
}

export default PlanSelectionContainer;
