import { connect } from 'react-redux';
import { receiveRealTimePrice } from '../../actions/security_actions';
import { receiveDay } from '../../actions/graph_actions';
import Portfolio from './portfolio';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        holdings: state.entities.holdings,
        price: state.entities.price,
    }
}

const mapDispatchToProps = dispatch => ({
    receiveDay: (ticker) => dispatch(receiveDay(ticker)),
    receiveRealTimePrice: (ticker) => dispatch(receiveRealTimePrice(ticker)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);