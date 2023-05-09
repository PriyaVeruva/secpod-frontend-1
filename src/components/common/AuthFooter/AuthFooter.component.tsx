import { Link } from 'react-router-dom';
import styles from './AuthFooter.module.scss';
import { ROUTES } from 'utils/routes.utils';
type PropType = {
    footerBody: string;
    linkTo: 'signup' | 'signin';
};
export default function AuthFooter({ footerBody, linkTo }: PropType): JSX.Element {
    return (
        <div className={styles.footerContent}>
            {footerBody}
            <span>
                {linkTo === 'signin' ? <Link to={ROUTES.login}>Sign In</Link> : <Link to={ROUTES.signUp}>Sign up</Link>}
            </span>
        </div>
    );
}
