import { useParams } from 'react-router-dom';
import PlanSelectionContainer from './PlanSelection/PlanSelectionContainer';
import BillingPageContainer from './BillingInformationPage/BillingPageContainer';
import ProfileContainer from './ProfilePage/ProfileContainer';

function PlanSelectionPage(): JSX.Element {
    const { step } = useParams();
    return (
        <div>
            {step == '0' && <PlanSelectionContainer />}
            {step == '1' && <BillingPageContainer />}
            {step == '2' && <ProfileContainer />}
        </div>
    );
}

export default PlanSelectionPage;
