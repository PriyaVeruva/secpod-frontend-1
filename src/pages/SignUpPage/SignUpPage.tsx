import SignUpForm from '../SignUpFormik/SignUpForm';
import AuthContainer from 'components/AuthContainer/AuthContainer.component';
import AuthHeader from 'components/common/AuthHeader/AuthHeader.component';
import AuthFooter from 'components/common/AuthFooter/AuthFooter.component';
import { text } from 'utils/text.utils';

export default function SignUpPage(): JSX.Element {
    return (
        <div>
            <AuthContainer>
                <div>
                    <AuthHeader header={text.loginPage.AUTH_HEADER} />
                    <SignUpForm padding={0} createAccount={true} />
                    <AuthFooter footerBody={text.loginPage.AUTH_FOOTER_HEADER} linkTo="signin" />
                </div>
            </AuthContainer>
        </div>
    );
}
