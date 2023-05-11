import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './Loader.module.scss';
export default function Loader(): JSX.Element {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className={styles.loader}>
            <CircularProgress variant="determinate" value={progress} size={'5rem'} />
            <div className={styles.loader_text}>Loading...</div>
        </div>
    );
}
