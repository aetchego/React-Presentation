import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import Onglets from './Onglets';
import { setPage } from '../redux/reducers/viewReducer';
import { HOME_PAGE } from '../utils/constants';
import { FaReact } from 'react-icons/fa';

class Header extends Component {

    render() {
        return (
            <Fragment>
                <Grid flex-wrap="wrap" container direction="row">
                    <Grid item lg={3} md={12} xs={12}>
                        <AppBar color="primary" position="static">
                            <Toolbar>
                                <Grid container direction="row" alignItems="center">
                                    <Button size="large" color="secondary"  onClick={this.props.changePage}><FaReact size={30}/></Button>
                                    <Typography variant="h6" component="h6" color="inherit">PRÉSENTATION REACT</Typography>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </Grid>

                    <Grid item lg={9} md={12} xs={12}>
                        <AppBar color="secondary" position="static">
                            <Toolbar>
                                <Grid container direction="row" justify="center">
                                    <Grid item xs={12} md={12} lg={12}><Onglets /></Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: () => dispatch(setPage(HOME_PAGE))
    }
}

export default Header = connect(null, mapDispatchToProps)(Header);