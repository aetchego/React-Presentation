import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {main: '#FF5722'},
        secondary: {main: '#ffffff'},
        background: {main: '#000000'},
        primaryText: {main: '#ffffff'}
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