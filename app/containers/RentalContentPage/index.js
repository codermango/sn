/**
 *
 * RentalContentPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { fetchRentalContent } from './actions';

import RentalContentHeader from 'components/RentalContentHeader/Loadable';


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

export class RentalContentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <RentalContentHeader />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

RentalContentPage.propTypes = {

};

const mapStateToProps = state => ({
  rental: state.rentalContentPage.data
});

function mapDispatchToProps(dispatch) {
  return {
    fetchRentalContent: () => dispatch(fetchRentalContent())
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'rentalContentPage', reducer });
const withSaga = injectSaga({ key: 'rentalContentPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(withStyles(styles)(RentalContentPage));
