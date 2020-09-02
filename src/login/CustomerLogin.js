import React, {Component} from 'react';
import {Container, Typography, TextField, Button, Box, Grid, Link, Checkbox, FormControlLabel, CssBaseline} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class CustomerLogin extends Component {
  
  state = {
    email: ""
  }
  
  Copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://cutiapp.com/">
          Cuti App
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })

  }

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.loginCustomer({email: this.state.email})
      this.setState({
          email: ""
      })
  }

    render() {
      const {classes} = this.props;

        return (
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Grid container item className={classes.paper}>
            <Typography component="h1" variant="h5">
              Customer Login
            </Typography>
            <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField variant="outlined" margin="normal" required fullWidth id="email"
                  label="Email Address" name="email" autoComplete="email" autoFocus
                  onChange={this.handleChange}/>
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Remember Me"/>
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" color="primary" >
                Let's Go!
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Login
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Box mt={5}>
            {this.Copyright}
          </Box>
        </Container>

       
        )
    }
}

export default withStyles(styles)(CustomerLogin)