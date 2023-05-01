import AppRouter from '../src/components/AppRouter/AppRouter.component';
import styles from './App.module.scss';

function App(): JSX.Element {
    return (
        <div className={styles.App}>
            <AppRouter />
        </div>
    );
}

export default App;
