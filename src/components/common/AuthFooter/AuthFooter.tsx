import { Link } from 'react-router-dom';
import styles from './AuthFooter.module.scss';
type PropType = {
    footerBody: string;
    linkTo: 'Sign up' | 'Sign in';
};
export default function AuthFooter({ footerBody, linkTo }: PropType): JSX.Element {
    return (
        <div className={styles.footerContent}>
            {footerBody}
            <span>
                <Link to={linkTo === 'Sign up' ? '/signUp' : '/login'}>{linkTo}</Link>
            </span>
        </div>
    );
}
