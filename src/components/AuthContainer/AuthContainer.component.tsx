import { PropType } from 'types/components/authContainer.type';
import SanerNowLogo from '../common/SanerNowLogo/SanerNowLogo.component';
import styles from './AuthContainer.module.scss';

export default function AuthContainer({ children }: PropType): JSX.Element {
    return (
        <div className={styles.topContainer}>
            <div className={styles.container}>
                <div className={styles.subContainer}>
                    <div>
                        <SanerNowLogo size={44} />
                    </div>
                    <div className={styles.subContainer_dialog}>{children}</div>
                </div>
            </div>
        </div>
    );
}
