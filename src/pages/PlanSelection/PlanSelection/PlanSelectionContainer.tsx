import ProductSelectionComponent from 'components/ProductSelectionComponent/ProductSelectionComponent';
import styles from './PlanSelection.module.scss';
import StepperComponent from 'components/common/Stepper/StepperComponent';
import { text } from 'utils/text.utils';
import PlanSectionCards from './PlanSectionCards';
import { cardContainerData2 } from 'pages/LandingPage/data';
import { TextField } from '@mui/material';
import { useState } from 'react';
import SubscriptionPlans from 'enums/subscriptionPlans';

function PlanSelectionContainer(): JSX.Element {
    const [devices, setDevices] = useState('');
    const [subscriptionState, setSubscriptionState] = useState(SubscriptionPlans.Monthly);

    const handleChange = (e: any): void => {
        setDevices(e.target.value);
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
                                value={devices}
                                onChange={handleChange}
                                name="devices"
                                type="number"
                                fullWidth
                            />
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
