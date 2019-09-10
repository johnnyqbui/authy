import { connect } from 'react-redux';
import { incrementCounter } from 'redux/actions/sample';
import Signup from './Signup';

export const mapStateToProps = state => ({
  counter: state.sample.counter,
});

export default connect(
  mapStateToProps,
  { incrementCounter },
)(Signup);
