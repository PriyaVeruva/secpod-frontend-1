import styles from './TopNavBar.module.scss';
import { HeaderData } from './data';
function TopNavBar(): JSX.Element {
    return (
        <div className={styles.header}>
            <span className={styles.logo}>
                Saner<span className={styles.textStyle1}>Now</span>
            </span>
            <ul className={styles.navLinks}>
                {HeaderData.map((ele, i) => {
                    return (
                        <li key={i}>
                            <a href={ele.path} className={ele.type !== 'button' ? styles.mobileHide : styles.button}>
                                {ele.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default TopNavBar;
