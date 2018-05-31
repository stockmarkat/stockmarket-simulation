import * as React from 'react';
import { AppState, Stock } from '../../state/AppState';
import { connect } from 'react-redux';
import { Col, Grid, Row } from 'react-bootstrap';
import StockCard from './Cards/StockCard';

interface MarketProps {
    stocks: Stock[];
}

interface MarketState {
}

class Depot extends React.Component<MarketProps, MarketState> {

    constructor( props: MarketProps ) {
        super( props );
    }

    render() {
        const {stocks} = this.props;

        return (
            <div className="content">
                <Grid fluid={true}>
                    <Row>
                        <Col sm={6}>
                            <StockCard stock={stocks[0]} />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ( state: AppState ) => ({
    stocks: state.stockMarket.stocks
});

// tslint:disable-next-line: no-any
const mapDispatchToProps = ( dispatch: any ) => ({});

export default connect( mapStateToProps, mapDispatchToProps )( Depot );
