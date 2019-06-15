import { createSelector } from 'reselect';

const selectExamplePageContainerDomain = state => state.get('examplePageContainer');
const makeSelectExamplePageContainer = () => createSelector(
  selectExamplePageContainerDomain,
  substate => substate.toJS(),
);

export default makeSelectExamplePageContainer;
export {
  selectExamplePageContainerDomain,
};
