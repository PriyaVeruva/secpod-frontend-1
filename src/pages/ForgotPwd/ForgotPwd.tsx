import styles from './ForgotPwd.module.scss';

import AuthContainer from 'components/AuthContainer/AuthContainer.component';

export default function ForgotPwd(): JSX.Element {
    return (
        <div>
            <AuthContainer>
                <div className={styles.test}></div>
            </AuthContainer>
        </div>
    );
}
