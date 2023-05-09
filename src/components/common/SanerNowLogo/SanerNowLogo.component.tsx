import { Link } from 'react-router-dom';
import styles from './SanerNowLogo.module.scss';
import { ROUTES } from 'utils/routes.utils';

type PropType = {
    size: number;
};

export default function SanerNowLogo({ size }: PropType): JSX.Element {
    return (
        <Link to={ROUTES.home}>
            <span className={styles.logo} style={{ fontSize: `${size}px` }}>
                Saner<span className={styles.now}>Now</span>
            </span>
        </Link>
    );
}
