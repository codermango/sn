/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { withStyles } from 'material-ui/styles';

import HomePage from '../HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import 'typeface-roboto';


const styles = {
  appBar: {
    backgroundColor: '#4286f5'
  },
  title: {
    fontSize: '20px',
    fontWeight: 700
  }
};

function App(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography color="inherit" className={classes.title}>
            SWEDEN
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default withStyles(styles)(App);
