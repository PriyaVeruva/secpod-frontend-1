import styles from './AuthHeader.module.scss';
type PropType = {
    header: string;
};
export default function AuthHeader({ header }: PropType): JSX.Element {
    return <div className={styles.authHeader}>{header}</div>;
}
