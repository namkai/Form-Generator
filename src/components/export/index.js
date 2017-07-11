import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import Export from './Export';

const mapStateToProps = (state, ownProps) => ({});

const connectToStore = connect();

const onDidMount = lifecycle({
	componentDidMount() {
	},
});

export default compose(connectToStore, onDidMount)(Export);
