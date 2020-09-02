import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    pallete: {
        white: '#FFFFFF',
        primary: '#2B50AA',
        secondary: {
            light: '#FFC15E',
            main: '#F7B05B',
            dark: '#F7934C',
        }
    },
    link: {
        color: 'black',
        "&hover": {
            color: 'black',
            textDecoration: 'none'
        }
    }

})


export default theme;