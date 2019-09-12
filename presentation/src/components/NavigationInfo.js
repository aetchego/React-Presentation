import React, { Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const style = {
    padding: '10px',
    backgroundColor: '#F5F5F5'
}

class NavigationInfo extends Component {

    render() {
        return (
            <Paper elevation={1} style={style}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link color="inherit" href="/">
                        Material-UI
                    </Link>
                    <Link color="inherit" href="/getting-started/installation/">
                        Core
                    </Link>
                    <Typography color="textPrimary">Breadcrumb</Typography>
                </Breadcrumbs>
            </Paper>
        );
    }
}

export default NavigationInfo;