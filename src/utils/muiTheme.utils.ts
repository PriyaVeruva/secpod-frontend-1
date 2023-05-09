import { createTheme } from '@mui/material';

const muiTheme = createTheme({
    typography: {
        body1: {
            fontFamily: 'Futura-Medium',
        },
        body2: {
            fontFamily: 'Futura-Medium',
        },
        h1: {
            fontFamily: 'Barlow-Medium',
        },
        h2: {
            fontFamily: 'Barlow, sans-serif',
            fontSize: '24px',
        },
        h3: {
            fontFamily: 'Barlow-Medium',
        },
        h4: {
            fontFamily: 'Barlow-Medium',
        },
        h5: {
            fontFamily: 'Barlow-Medium',
        },
        button: {
            fontFamily: 'Futura-Medium',
            fontWeight: 500,
            textTransform: 'uppercase',
            fontSize: '1rem',
        },
    },
});

export default muiTheme;
