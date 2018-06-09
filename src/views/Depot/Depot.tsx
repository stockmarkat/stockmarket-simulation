import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AppState, FinancialSnapshot, StockCategoryValue } from '../../state/AppState';
import { BalanceCard, StockBalanceCard, StockShareCard } from './Cards';

interface DepotProps {
    accountValue: number;
    stockValue: number;
    stockValueDevelopment: FinancialSnapshot[];
    stockCategoryValues: StockCategoryValue[];
}

interface DepotState {
}

class Depot extends React.Component<DepotProps, DepotState> {

    constructor(props: DepotProps) {
        super(props);
    }

    render() {
        const { stockCategoryValues } = this.props;

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
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    accountValue: state.depot.accountValue,
    stockValue: state.depot.stockValue,
    stockValueDevelopment: state.depot.stockValueDevelopment,
    stockCategoryValues: state.depot.stockCategoryValues
});

// tslint:disable-next-line: no-any
const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Depot);
