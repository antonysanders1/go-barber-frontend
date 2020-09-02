import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import BarberLogin from '../login/BarberLogin'
import CustomerLogin from '../login/CustomerLogin'

import { loginBarber, loginCustomer } from '../actions/userActions';
import { connect } from 'react-redux';



class Login extends Component {

    useStyles = makeStyles((theme) => ({
        paper: {
          marginTop: theme.spacing(2),
          
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(3),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));

    render() {
        return (
          <Grid container item xs={12}>
            <CssBaseline />
            <Router>
                <Grid container item xs={12} md={6} >
                  <Grid item xs={2}></Grid>
                  <Grid container item xs={8}>
                      <Button  fullWidth component={Link} to="/login/barber" variant="contained" color="primary" className={this.useStyles.submit}>
                      Barber Login
                      </Button>
                  </Grid>
                  <Grid item xs={2}></Grid>
                </Grid>
        
                <Grid container  item xs={12} md={6} >
                  <Grid item xs={2}></Grid>
                  <Grid container item xs={8}>
                      <Button  fullWidth component={Link} to="/login/customer" variant="contained" color="primary" className={this.useStyles.submit}>
                      Customer Login
                      </Button>
                  </Grid>
                  <Grid item xs={2}></Grid>
                </Grid>
                    {this.props.error ? <Grid container  item xs={12}><p>{this.props.error}</p></Grid> : null}
              <Switch>
                  <Route path="/login/barber" render= {() => <BarberLogin loginBarber={this.props.loginBarber}/>} />
                  <Route path="/login/customer" render= {() => <CustomerLogin loginCustomer={this.props.loginCustomer}/>} />
              </Switch>
            </Router>
          </Grid>
        );   
    }
}

const mapState = state => {
    return {
        error: state.loginError
    }
}

export default connect(mapState, {loginCustomer, loginBarber})(Login)


