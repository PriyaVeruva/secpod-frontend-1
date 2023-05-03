import SignUpForm from '../SignUpFormik/SignUpForm';
import AuthContainer from 'components/AuthContainer/AuthContainer.component';
import AuthHeader from 'components/common/AuthHeader/AuthHeader';
import AuthFooter from 'components/common/AuthFooter/AuthFooter';

export default function SignUpPage(): JSX.Element {
    return (
        <div>
            <AuthContainer>
                <div>
                    <AuthHeader header={'Create your account'} />
                    <SignUpForm padding={0} createAccount={true} />
                    <AuthFooter footerBody=" Dont have SanerNow account?" linkTo="Sign in" />
                </div>
            </AuthContainer>
        </div>
    );
}
