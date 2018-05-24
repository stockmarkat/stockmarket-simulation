import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { TotalIncomeCard } from './Cards/TotalIncomeCard';
import { TotalExpensesCard } from './Cards/TotalExpensesCard';
import { AppState } from '../../state/AppState';
import { connect } from 'react-redux';
import { InventoryValueCard } from './Cards/InventoryValueCard';
import { BalanceTile } from '../../components/BalanceTile/BalanceTile';

interface AccountProps {
    fortune: number;
    totalIncome: number;
    totalExpenses: number;
    inventoryValue: number;
}

interface AccountState {
}

class Account extends React.Component<AccountProps, AccountState> {

    constructor( props: AccountProps ) {
        super( props );
    }

    render() {
        const {fortune, totalIncome, totalExpenses, inventoryValue} = this.props;
        return (
            <div className="content">
                <Grid fluid={true}>
                    <Row>
                        <Col lg={4} sm={6}>
                            <BalanceTile
                                value={fortune}
                                title={'Kontostand'}
                                icon={<i className="pe-7s-piggy text-success"/>}
                            />
                        </Col>
                        <Col lg={4} sm={6}>
                            <TotalIncomeCard value={totalIncome}/>
                        </Col>
                        <Col lg={4} sm={6}>
                            <TotalExpensesCard value={totalExpenses}/>
                        </Col>
                        <Col lg={4} sm={6}>
                            <InventoryValueCard value={inventoryValue}/>
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}

const mapStateToProps = ( state: AppState ) => ({

    })
;

// tslint:disable-next-line: no-any
const mapDispatchToProps = ( dispatch: any ) => ({});

export default connect( mapStateToProps, mapDispatchToProps )( Account );