import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bar from './test/bar';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={this.props.classes.grow}>
              Jarek Gajos - Software developer
            </Typography>
            <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Grid
          item xs={12}
          container
          direction="column"
          justify="center"
          alignItems="stretch"
        >
          <div>
            <Bar />
          </div>
          <div>
            <Bar />
          </div>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
