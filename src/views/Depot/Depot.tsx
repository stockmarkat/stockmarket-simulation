import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AppState, FinancialSnapshot, StockCategoryValue } from '../../state/AppState';
import { getStockCategoryValues, getStockValue } from '../../state/depot/depotSelector';
import { BalanceCard, StockBalanceCard, StockShareCard } from './Cards';
import { CapitalDevelopment } from './Cards/CapitalDevelopment';

interface DepotProps {
    accountValue: number;
    stockValue: number;
    stockValueDevelopment: FinancialSnapshot[];
    stockCategoryValues: StockCategoryValue[];
}

class Depot extends React.Component<DepotProps> {

    render() {
        const {stockCategoryValues, accountValue, stockValue, stockValueDevelopment} = this.props;

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
                        <Col lg={4} sm={6}>
                            <StockShareCard stockCategoryValues={this.props.stockCategoryValues}/>
                        </Col>
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
    stockCategoryValues: getStockCategoryValues( state )
});

// tslint:disable-next-line: no-any
const mapDispatchToProps = ( dispatch: any ) => ({});

export default connect( mapStateToProps, mapDispatchToProps )( Depot );
