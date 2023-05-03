import { Link } from 'react-router-dom';
import styles from './AuthFooter.module.scss';
type PropType = {
    footerBody: string;
    linkTo: 'signup' | 'signin';
};
export default function AuthFooter({ footerBody, linkTo }: PropType): JSX.Element {
    return (
        <div className={styles.footerContent}>
            {footerBody}
            <span>
                {linkTo === 'signup' ? <Link to="/signUp">{'Sign up'}</Link> : <Link to="/login">{'Sign in'}</Link>}
            </span>
        </div>
    );
}
