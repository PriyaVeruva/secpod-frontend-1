import ProductSelectionComponent from 'components/ProductSelectionComponent/ProductSelectionComponent';
import StepperComponent from 'components/common/Stepper/StepperComponent';
import Payments from './Payments';

function BillingPageContainer(): JSX.Element {
    return (
        <ProductSelectionComponent>
            <StepperComponent />
            <Payments />
        </ProductSelectionComponent>
    );
}

export default BillingPageContainer;
