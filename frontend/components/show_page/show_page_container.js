import { connect } from 'react-redux';
import { receiveProfile, receiveRealTimePrice, clearRealTimePrice } from '../../actions/security_actions';
import ShowPage from './show_page';
import { receiveNews, clearGraphPrices } from '../../actions/graph_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    ticker: ownProps.match.params.ticker,
    profile: state.entities.profile,
    price: state.entities.price,
    news: state.entities.news
})

const mapDispatchToProps = dispatch => ({
    receiveProfile: (company) => dispatch(receiveProfile(company)),
    receiveRealTimePrice: (ticker) => dispatch(receiveRealTimePrice(ticker)),
    receiveNews: () => dispatch(receiveNews()),
    clearRealTimePrice: () => dispatch(clearRealTimePrice()),
    clearGraphPrices: () => dispatch(clearGraphPrices())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);