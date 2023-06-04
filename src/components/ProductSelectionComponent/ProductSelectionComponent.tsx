import styles from './ProductSelectionComponent.module.scss';
function ProductSelectionComponent({ children }: any): JSX.Element {
    return (
        <div className={styles.topContainer}>
            <div className={styles.container}>{children}</div>
        </div>
    );
}
export default ProductSelectionComponent;
