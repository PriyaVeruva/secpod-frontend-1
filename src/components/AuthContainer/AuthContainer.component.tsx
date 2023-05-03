import { PropType } from 'types/components/authContainer.type';
import SanerNowLogo from '../common/SanerNowLogo/SanerNowLogo.component';
import styles from './AuthContainer.module.scss';

export default function AuthContainer({ children }: PropType): JSX.Element {
    return (
        <div className={styles.topContainer}>
            <div className={styles.container}>
                <div>
                    <SanerNowLogo size={44} />
                </div>
                <div className={styles.container_dialog}>{children}</div>
            </div>
        </div>
    );
}
