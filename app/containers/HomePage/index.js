/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import { compose } from 'redux';
import { connect } from 'react-redux';

import { fetchAllRentals } from './actions';
import reducer from './reducer';
import saga from './saga';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import RentalList from 'components/RentalList';


const styles = {
  root: {
    flexGrow: 1,
    margin: 30,
  },
  paper: {
    padding: 0,
    textAlign: 'center'
  },
};

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.fetchAllRentals();
  }

  render() {
    const { classes, rentals } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              { rentals && <RentalList data={rentals} /> }
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllRentals: () => dispatch(fetchAllRentals())
  };
}

const mapStateToProps = state => ({
  rentals: state.homePage.rentals
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });


export default compose(
  withReducer,
  withSaga,
  withConnect
)(withStyles(styles)(HomePage));
