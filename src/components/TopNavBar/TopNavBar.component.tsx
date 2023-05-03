import SanerNowLogo from '../common/SanerNowLogo/SanerNowLogo.component';
import styles from './TopNavBar.module.scss';
import { HeaderData } from './data';
import { Link } from 'react-router-dom';
function TopNavBar(): JSX.Element {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <SanerNowLogo size={40} />
            </div>
            <ul className={styles.navLinks}>
                {HeaderData.map((ele, i) => {
                    return (
                        <li key={i}>
                            <a href={ele.path} className={styles.mobileHide}>
                                {ele.name}
                            </a>
                        </li>
                    );
                })}
                <Link to={'/login'} className={styles.button}>
                    {'LOG IN'}
                </Link>
            </ul>
        </div>
    );
}

export default TopNavBar;
