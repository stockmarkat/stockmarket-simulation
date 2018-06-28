import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AppState, FinancialSnapshot, Stock, StockCategoryValue } from '../../state/AppState';
import { getStockCategoryValues, getStocksForDepot, getStockValue } from '../../state/depot/depotSelector';
import { BalanceCard, StockBalanceCard, StockShareCard } from './Cards';
import { CapitalDevelopement } from './Cards/CapitalDevelopement';
import { StockTile } from '../../components/StockTile/StockTile';

interface DepotProps {
    accountValue: number;
    stockValue: number;
    stockValueDevelopment: FinancialSnapshot[];
    stockCategoryValues: StockCategoryValue[];
    stocks: Stock[];
}

interface DepotState {
}

class Depot extends React.Component<DepotProps, DepotState> {

    constructor( props: DepotProps ) {
        super( props );
    }

    render() {
        const { stockCategoryValues, stocks } = this.props;

        return (
            <div className="content">
                <Grid fluid={true}>
                    <Row>
                        <Col lg={4} sm={6}>
                            <BalanceCard value={this.props.accountValue}/>
                        </Col>
                        <Col lg={4} sm={6}>
                            <StockBalanceCard value={this.props.stockValue}/>
                        </Col>
                        {stockCategoryValues.length > 0 &&
                        <Col lg={4} sm={6}>
                            <StockShareCard stockCategoryValues={stockCategoryValues}/>
                        </Col>
                        }
                        <Col xs={8}>
                            <CapitalDevelopement values={this.props.stockValueDevelopment}/>
                        </Col>
                    </Row>
                    <Row>
                    {

                        stocks.map(stock => {
                            return (
                                    <Col key={stock.name} >
                                        <StockTile
                                            title={stock.name}
                                            total={stock.quantity * stock.value}
                                            value={stock.value}
                                            count={stock.quantity}
                                            type={stock.type}
                                        />
                                    </Col>
                            );
                        })
                    }
                    </Row>

                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ( state: AppState ) => ({
    accountValue: state.depot.accountValue,
    stockValue: getStockValue( state ),
    stockValueDevelopment: state.depot.stockValueDevelopment,
    stockCategoryValues: getStockCategoryValues( state ),
    stocks: getStocksForDepot( state )
});

// tslint:disable-next-line: no-any
const mapDispatchToProps = ( dispatch: any ) => ({});

export default connect( mapStateToProps, mapDispatchToProps )( Depot );
