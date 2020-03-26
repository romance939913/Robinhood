import React from 'react';
import MainNavContainer from './nav/nav_container';
import GraphMainContainer from './graph_main_container';
import PortfolioContainer from './portfolio_container';

class MainFeed extends React.Component {

    componentDidMount() {
        let holding = {
            user_id: this.props.currentUser.id
        }
        this.props.getHoldings(holding);
        this.props.getUserBP(this.props.currentUser.id)
    }
    
    render() {
        if (this.props.holdings.length === 0) return null;
        if (this.props.cash.length === 0) return null;
            
        return (
            <div>
                <MainNavContainer />
                <div className="main-page-wrapper">
                    <div className="graph-valuation-wrapper">
                        <GraphMainContainer 
                            tickers={Object.keys(this.props.holdings)} 
                            cash={this.props.cash}
                        />
                    </div>
                    <PortfolioContainer 
                        tickers={Object.keys(this.props.holdings)}
                    />
                </div>
            </div>
        );
    }
}

export default MainFeed;