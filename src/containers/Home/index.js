import { connect } from 'react-redux';
import { addInitialLoad } from 'redux/actions/sample';
import Home from './Home';

export default connect(
  null,
  { addInitialLoad },
)(Home);
