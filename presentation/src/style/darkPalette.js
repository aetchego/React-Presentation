import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {main: '#ffffff'},
        secondary: {main: '#283339'},
        background: {main: '#282c34'},
    },

    typography: {
        fontFamily: [
            'Maven Pro'
        ].join(','),
        fontWeightMedium: 500,
        body1: {fontWeight: 500,},
        subtitle1: {fontSize: 15,}
    },
});