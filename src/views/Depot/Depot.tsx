import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AppState, FinancialSnapshot, Stock, StockCategoryValue } from '../../state/AppState';
import { getPossessedStocks, getStockCategoryValues, getStockValue } from '../../state/depot/depotSelector';
import { BalanceCard, StockBalanceCard, StockShareCard } from './Cards';
import { CapitalDevelopment } from './Cards/CapitalDevelopment';
import { StockCard } from './Cards/StockCard';

interface DepotProps {
    accountValue: number;
    stockValue: number;
    stockValueDevelopment: FinancialSnapshot[];
    stockCategoryValues: StockCategoryValue[];
    stocks: Stock[];
}

class Depot extends React.Component<DepotProps> {

    render() {

        const {stockCategoryValues, accountValue, stockValue, stockValueDevelopment, stocks} = this.props;

        return (
            <div className="content">
                <Grid fluid={true}>
                    <Row>
                        <Col lg={4} sm={6} xs={12}>
                            <BalanceCard value={accountValue}/>
                        </Col>
                        <Col lg={4} sm={6} xs={12}>
                            <StockBalanceCard value={stockValue}/>
                        </Col>
                        <Col lg={8} sm={6} xs={12}>
                            <CapitalDevelopment values={stockValueDevelopment} />
                        </Col>
                        {stockCategoryValues.length > 0 &&
                        <Col lg={4} sm={6} xs={12}>
                            <StockShareCard stockCategoryValues={this.props.stockCategoryValues}/>
                        </Col>
                        }
                    </Row>
                    {stocks.length > 0 && <hr className="stocktile-hr"/>}
                    <Row>
                    {

                        stocks.map(stock => {
                            return (
                                    <Col key={stock.name} lg={4} sm={6} xs={12}>
                                        <StockCard
                                            name={stock.name}
                                            price={stock.value}
                                            quantity={stock.quantity}
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
    stocks: getPossessedStocks( state )
});

// tslint:disable-next-line: no-any
const mapDispatchToProps = ( dispatch: any ) => ({});

export default connect( mapStateToProps, mapDispatchToProps )( Depot );
