import ProductSelectionComponent from 'components/ProductSelectionComponent/ProductSelectionComponent';
import StepperComponent from 'components/common/Stepper/StepperComponent';
import Payments from './Payments';
import styles from './BillingPage.module.scss';

function BillingPageContainer(): JSX.Element {
    return (
        <ProductSelectionComponent>
            <div className={styles.billingContainer}>
                <StepperComponent />
            </div>
            <Payments />
        </ProductSelectionComponent>
    );
}

export default BillingPageContainer;
