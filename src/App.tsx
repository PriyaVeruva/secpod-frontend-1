import { Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import LandingPage from './pages/LandingPage/LandingPage';

function App(): JSX.Element {
    return (
        <div className={styles.App}>
            <Routes>
                <Route path='/' element={<LandingPage />} />
            </Routes>
        </div>
    );
}

export default App;
