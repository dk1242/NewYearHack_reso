import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './grid.css';
import Header from '../header/nav';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    backgroundColor: 'white',
    height: "0px"
  },
  margin:{
    paddingTop: '100px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: "center",
    justifyContent: 'center',
    color: 'white',
    backgroundColor: "darkgrey",
    height: "50px"
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Header /> 
      <Grid className={classes.margin} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              <div className="align">
                  Name
              </div>
              <div className="align1">
                  Content Goes here
              </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              <div className="align">
                  Name
              </div>
              <div className="align1">
                  Content Goes here
              </div>
          </Paper>
        </Grid> 
      </Grid>
    </div>
  );
}
