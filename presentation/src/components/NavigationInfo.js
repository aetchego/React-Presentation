import React, { Component, Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class NavigationInfo extends Component {
    render() {
        return (
            <Paper elevation={0} >
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