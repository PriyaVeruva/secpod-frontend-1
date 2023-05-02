import CustomButton from 'components/common/FormComponents/CustomButtonComponent/CustomButton.component';
import styles from './ForgotPwd.module.scss';

import AuthContainer from 'components/AuthContainer/AuthContainer.component';

export default function ForgotPwd(): JSX.Element {
    return (
        <div>
            <AuthContainer>
                <div className={styles.test}>
                    <CustomButton
                        buttonText="Submit"
                        type="submit"
                        variant="contained"
                        fullWidth={true}
                        onClick={(e: any): void => console.log(e)}
                    />
                </div>
            </AuthContainer>
        </div>
    );
}
