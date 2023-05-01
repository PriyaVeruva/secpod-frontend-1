import { createTheme } from "@mui/material";

const muiTheme = createTheme({
    typography : {
        body1: {
            fontFamily: "Futura-Bold",
          },
          body2: {
            fontFamily: "Futura-Bold",
          },
          h1: {
            fontFamily: 'Barlow-Medium',
          },
          h2: {
            fontFamily: 'Barlow-Medium',
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
            fontFamily: 'Futura-Bold',
            fontWeight: 500,
            textTransform: 'uppercase',
            fontSize: '1rem'
          }
    }
})

export default muiTheme;