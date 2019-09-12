import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import { setPage } from '../redux/reducers/viewReducer';
import { DEMO } from '../utils/constants';

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
        changePage: () => dispatch(setPage(DEMO))
    }
}

export default Dashboard = connect(null,  mapDispatchToProps)(Dashboard);