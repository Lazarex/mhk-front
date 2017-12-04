// import React from 'react';
// import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as actions from '../actions/homePageActions';
// import HomePage from '../components/HomePage';
//
// export const HomePageContainer = (props) => {
//   return <HomePage />;
// };
//
// HomePageContainer.propTypes = {
//   actions: PropTypes.object.isRequired,
//   carList: PropTypes.array
// };
//
// function mapStateToProps(state) {
//   return {
//     carList: state.carList
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(HomePageContainer);
