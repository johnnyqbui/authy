import { connect } from 'react-redux';
import { incrementCounter } from 'redux/actions/sample';
import Login from './Login';

export const mapStateToProps = state => ({
  counter: state.sample.counter,
});

export default connect(
  mapStateToProps,
  { incrementCounter },
)(Login);
