import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { FormControl, Paper, InputLabel, Button, FormHelperText } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField'
import Autocomplete from './Autocomplete';
import { notificationSuccess, setPage } from '../redux/reducers/viewReducer';
import { postContratRachatAnticipé } from '../redux/reducers/contratRachatAnticipeReducer';
import { getCodeRachat } from '../redux/reducers/contractsInfoReducers';
import { selectAdossement, selectContrats, selectCodeRachat } from '../redux/selectors/contractsInfoSelector';
import { HOME_PAGE } from '../utils/constants';

class Form extends Component {

    numeroContrat = '';

    state = {
        adossementValue: '',
        codeRachat: '',
        dateRachat: new Date().toISOString().split('T')[0],
        error: false,
        dateError: false
    }

    onSubmit = () => {
        if (this.state.adossementValue === '' || this.state.codeRachat === ''
            || this.state.dateRachat === '' || this.numeroContrat === '') {
            this.setState({ error: true });
            return;
        }
        this.setState({ error: false });
        if (this.state.dateRachat !== '') {
            let currentDate = new Date();
            let date = new Date(this.state.dateRachat + " 23:23:59");
            if (date < currentDate) {
                this.setState({ dateError: true });
                return;
            }
        }
        this.props.postContrat({ id: this.props.contrats.filter(e => e.ContratNumref === this.numeroContrat)[0].contratid, adossement: this.state.adossementValue, codeRachat: this.state.codeRachat, dateRachat: this.state.dateRachat });
        this.props.redirect(HOME_PAGE);
    }

    handleAutocompleteChange = (e) => this.numeroContrat = e;

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const disabled = this.state.adossementValue !== '' ? false : true;

        return (
            <Grid container>
                <Grid item xs={3}></Grid>

                <Grid item xs={6} container justify="center">
                    <Paper className="form" square>

                        <FormControl fullWidth margin="normal">
                            <InputLabel htmlFor="age-simple">Adossement</InputLabel>
                            <Select
                                name="adossementValue"
                                value={this.state.adossementValue}
                                onChange={(event) => { this.handleChange(event); this.props.lookForCodeRachat(event.target.value) }}
                                autoWidth
                            >
                                {this.props.adossement.map(e => <MenuItem value={e} key={e}>{e}</MenuItem>)}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            <Autocomplete disabled={disabled} function={this.handleAutocompleteChange} adossement={this.state.adossementValue} />
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel disabled={disabled} htmlFor="age-simple">Code rachat</InputLabel>
                            <Select
                                name="codeRachat"
                                value={this.state.codeRachat}
                                onChange={this.handleChange}
                                disabled={disabled}
                            >
                                {this.props.codeRachat.map(e => <MenuItem value={e} key={e}>{e}</MenuItem>)}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <div className="textField" style={{ marginTop: '35px' }}>
                                <TextField
                                    name="dateRachat"
                                    label="Date de rachat"
                                    type="date"
                                    value={this.state.dateRachat}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={this.handleChange}
                                    variant="outlined"
                                    disabled={disabled}
                                />
                            </div>
                        </FormControl>

                        <FormControl fullWidth margin="normal">
                            {this.state.dateError ? <FormHelperText error>La date de rachat ne peut être inférieure à la date d'aujourd'hui.</FormHelperText> : null}
                            {this.state.error ? <FormHelperText error>Tous les champs doivent être remplis.</FormHelperText> : null}
                        </FormControl>

                        <FormControl margin="normal">
                            <Button variant="contained" 
                            color="primary" 
                            onClick={this.onSubmit} 
                            style={{borderRadius: '3px', backgroundColor:'#9A8EB4'}}>
                            Racheter le contrat</Button>
                        </FormControl>

                    </Paper>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        adossement: selectAdossement(state),
        contrats: selectContrats(state),
        codeRachat: selectCodeRachat(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        successMessage: (msg) => dispatch(notificationSuccess(msg)),
        postContrat: (contrat) => dispatch(postContratRachatAnticipé(contrat)),
        redirect: (page) => dispatch(setPage(page)),
        lookForCodeRachat: (adossement) => dispatch(getCodeRachat(adossement))
    }
}

export default Form = connect(mapStateToProps, mapDispatchToProps)(Form);