import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'Utils/injectSaga';
import injectReducer from 'Utils/injectReducer';

import {
  Form,
  Button,
  InputField,
  Label,
} from 'Form';

import makeSelectExamplePageContainer from './selector';
import reducer from './reducer';
import saga from './saga';
import {
  fetchExampleInit,
  addExampleInit,
  updateExampleInit,
  deleteExampleInit,
} from './actions';

class ExamplePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      somedata1: '',
      somedata2: '',
    };
  }

  onChange = ({ target: { name, value } = {} } = {}) => {
    if (name) {
      this.setState({
        [name]: value,
      });
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { addExample } = this.props;
    addExample(this.state);
  }

  render() {
    const {
      fetchExample,
      addExample,
      updateExample,
      deleteExample,
      examplePageContainer,
    } = this.props;

    const { somedata1, somedata2 } = this.state;

    return (
      <div className="container">
        <Form onSubmit={() => {}}>
          <Label htmlFor="input-field-somedata1">
            Some data
          </Label>
          <InputField
            id="input-field-somedata1"
            placeholder="Some data"
            name="somedata1"
            value={somedata1}
            onChange={this.onChange}
          />
          <Label htmlFor="input-field-somedata2">
            Some data
          </Label>
          <InputField
            id="input-field-somedata2"
            placeholder="Some data"
            name="somedata2"
            value={somedata2}
            onChange={this.onChange}
          />
          <Button type="submit" modifier="green" text="Submit" onClick={this.onSubmit} />
        </Form>
        <p> Data from redux store: {JSON.stringify(examplePageContainer)}</p>
      </div>
    );
  }
}

ExamplePage.propTypes = {
  fetchExample: PropTypes.func.isRequired,
  addExample: PropTypes.func.isRequired,
  updateExample: PropTypes.func.isRequired,
  deleteExample: PropTypes.func.isRequired,
  examplePageContainer: PropTypes.shape({
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
