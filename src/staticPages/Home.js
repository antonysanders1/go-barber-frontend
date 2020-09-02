import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
//import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
//import Paper from '@material-ui/core/Paper';
//import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  headerImage: {
      height: '500px',
      backgroundImage: 'url(https://www.inquirer.com/resizer/orhvGzXeXNLr2xpL6_d81Lv-IQE=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/PTR2I5SGUNHJJGUGMHSGXFFCKU.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  },
  image: {
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  textWht: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 'bold'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function Home() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid container item direction="column" sm={12}className={classes.headerImage}>
          <Grid item xs={4}></Grid>

          <Grid container>
              <Grid item xs={1}></Grid>

              <Grid container direction="column" item xs={10}>
                <Grid item>
                    <Typography variant="h2" color="secondary" className={classes.textWht}>Welcome To Go-Barber</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h4" color="secondary" className={classes.textWht}>
                        Get the best cuts on your time. Anytime.
                    </Typography>
                </Grid>
                <Grid>
                    <Button color="secondary" variant="contained">
                        Get Started.
                    </Button>
                </Grid>
              </Grid>

              <Grid item xs={1}></Grid>    
          </Grid>
      </Grid>
      <Grid container className={classes.section2}>
        <Grid item xs={2}></Grid>
        <Grid item container direction="column" alignItems="center" xs={8}>
            <Grid item>
                <Typography variant='h4'>Section 2 Title</Typography>
            </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Grid>
  );
}