import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import Dashboard from './Dashboard';
import { selectPage } from '../redux/selectors/viewSelector';
import { HOME_PAGE, UNI_RACHAT } from '../utils/constants';
import { getAdossement } from '../redux/reducers/contractsInfoReducers';
import NavigationInfo from './NavigationInfo';
import '../App.css';

class Home extends Component {

    componentDidMount() {
        this.props.getAdossements();
    }

    render() {
        return (
            <Grid container direction="column" spacing={3}>
                <Grid item xs={12} md={12} lg={12}><Header/></Grid>
                <Grid item xs={12} md={12} lg={12}><NavigationInfo></NavigationInfo></Grid>
                {this.props.page === HOME_PAGE && <Fragment>
                    <Grid item xs={12} className="grid-dashboard"/>
                    <Grid item xs={12}><Dashboard/></Grid></Fragment>}
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        page: selectPage(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAdossements: () => dispatch(getAdossement())
    }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home);