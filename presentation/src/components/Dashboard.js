import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { UNI_RACHAT } from '../utils/constants';
import { setPage } from '../redux/reducers/viewReducer';

class Dashboard extends Component {

    render() {
        return (
            <Fragment/>
            /*<Grid container direction="row" spacing={3}>
                <Grid item xs={1} md={2} lg={3} ></Grid>

                <Grid item xs={10} md={8} lg={6} container justify="space-evenly" alignItems="flex-end">

                    <Grid item xs={12} md ={12} lg={5} container justify="center">
                        <Card className="card">
                            <Grid container justify="center">
                                <CardContent className="cardcontent">
                                    <FontAwesomeIcon icon={faCoins} size="4x" color="#FDD835" />
                                </CardContent>
                            </Grid>
                                <CardActions className="actions">
                                    <Button size="large" disableFocusRipple disableRipple fullWidth onClick={this.props.changePage}>Racheter un contrat</Button>
                                </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md ={12} lg={5} container justify="center">
                        <Card className="card">
                            <Grid container justify="center">
                                <CardContent className="cardcontent">
                                    <FontAwesomeIcon icon={faCoins} size="4x" color="#FDD835" />
                                    <FontAwesomeIcon icon={faCoins} size="4x" color="#FDD835" />
                                    <FontAwesomeIcon icon={faCoins} size="4x" color="#FDD835" />
                                </CardContent>
                            </Grid>
                                <CardActions className="actions">
                                    <Button size="large" color="inherit" fullWidth disabled>Racheter des contrats</Button>
                                </CardActions>
                        </Card>
                    </Grid>

                </Grid>

                <Grid item xs={1} md={2} lg={3}></Grid>
            </Grid>*/
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: () => dispatch(setPage(UNI_RACHAT))
    }
}

export default Dashboard = connect(null,  mapDispatchToProps)(Dashboard);