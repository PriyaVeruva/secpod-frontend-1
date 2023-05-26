import ProductSelectionComponent from 'components/ProductSelectionComponent/ProductSelectionComponent';
import StepperComponent from 'components/common/Stepper/StepperComponent';

function ProfileContainer(): JSX.Element {
    return (
        <ProductSelectionComponent>
            <StepperComponent />
        </ProductSelectionComponent>
    );
}

export default ProfileContainer;
