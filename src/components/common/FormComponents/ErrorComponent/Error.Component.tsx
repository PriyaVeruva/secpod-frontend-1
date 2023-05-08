import styles from './Error.module.scss';

type PropType = {
    children: string | string[];
};

export default function ErrorComponent({ children }: PropType): JSX.Element {
    return <div className={styles.err}>{children}</div>;
}
