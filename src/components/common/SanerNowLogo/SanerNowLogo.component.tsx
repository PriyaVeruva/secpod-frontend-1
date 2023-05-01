import styles from './SanerNowLogo.module.scss';

type PropType = {
    size: number;
};

export default function SanerNowLogo({ size }: PropType): JSX.Element {
    return (
        <span className={styles.logo} style={{ fontSize: `${size}px` }}>
            Saner<span className={styles.now}>Now</span>
        </span>
    );
}
