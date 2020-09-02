import React, {Component} from 'react';
import {Button, Grid, Divider} from '@material-ui/core'
import {Typography} from '@material-ui/core'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {About} from '../staticPages/About'
import {Home} from '../staticPages/Home'
import Login from '../staticPages/Login'
import {SignUp} from '../staticPages/SignUp'
//import { loginBarber } from '../actions/barberActions';


class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Grid container direction="column">
                        <Grid item xs={12} container spacing={2}>
                        
                            <Grid item lg={1}> </Grid>


                            <Grid item xs={4} sm={3} md={2}>
                            <Typography className="link" variant='h5' component={Link} to="/">GO-BARBER</Typography>
                            </Grid>

                            <Grid item sm={2} md={3} lg={6}> </Grid>

                            <Grid item xs={2} sm={2} md={2} lg={1}>  
                                <Button fullWidth={true} color='primary' component={Link} to="/about">About</Button>
                            </Grid>

                            <Grid item xs={3} sm={2} md={2} lg={1}>
                                <Button fullWidth={true} color='primary' component={Link} to="/signup">Sign Up</Button>
                            </Grid>

                            <Grid item xs={2} sm={2} md={2} lg={1}>
                                <Button fullWidth={true} color='primary' component={Link} to="/login">Login</Button>
                            </Grid>       
                        </Grid>
                        <Divider/>
                    </Grid>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/about" component={About} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </Router>

        )
    }
}


export default Main;