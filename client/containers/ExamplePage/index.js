import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'Utils/injectSaga';
import injectReducer from 'Utils/injectReducer';

import makeSelectExamplePageContainer from './selector';
import reducer from './reducer';
import saga from './saga';
import {
  addExampleInit,
  fetchExampleInit,
  updateExampleInit,
  deleteExampleInit,
} from './actions';

class ExamplePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      example: {},
    };
  }

  static getDerivedStateFromProps(props) {
    const { examplePageContainer } = props;
    const { example } = examplePageContainer;

    return {
      example: example || {},
    };
  }

  render() {
    const {
      addExample,
      fetchExample,
      updateExample,
      deleteExample,
      examplePageContainer,
    } = this.props;

    return (
      <div>
        ExamplePage!
      </div>
    );
  }
}

ExamplePage.propTypes = {
  addUser: PropTypes.func.isRequired,
  fetchExample: PropTypes.func.isRequired,
  updateExample: PropTypes.func.isRequired,
  deleteExample: PropTypes.func.isRequired,
  ExamplePageContainer: PropTypes.shape({
    example: PropTypes.object,
    errorMessage: PropTypes.string,
    isLoading: PropTypes.bool,
    showError: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  examplePageContainer: makeSelectExamplePageContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    addExample: example => dispatch(addExampleInit(example)),
    fetchExample: exampleId => dispatch(fetchExampleInit(exampleId)),
    updateExample: (exampleId, example) => dispatch(updateExampleInit(exampleId, example)),
    deleteExample: exampleId => dispatch(deleteExampleInit(exampleId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'examplePageContainer', reducer });
const withSaga = injectSaga({ key: 'examplePageContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ExamplePage);
