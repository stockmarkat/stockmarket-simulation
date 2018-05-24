import * as React from 'react';
import { AppState, FinancialSnapshot, StockCategoryValue } from '../../state/AppState';
import { connect } from 'react-redux';
import { StockShareCard } from './Cards/StockShareCard';

interface DashboardProps {
    accountValue: number;
    stockValue: number;
    stockValueDevelopment: FinancialSnapshot[];
    stockCategoryValues: StockCategoryValue[];
}

interface DashboardState {
}

export class Dashboard extends React.Component<DashboardProps, DashboardState> {

    constructor( props: DashboardProps ) {
        super( props );
    }

    render() {
        // const {stockCategoryValues} = this.props;

        // TODO use value from props. This is test data.
        const data = [
            {
                ratio: 1,
                categoryName: 'Weapons'
            },
            {
                ratio: 3,
                categoryName: 'Finance'
            },
            {
                ratio: 3,
                categoryName: 'Hello'
            },
            {
                ratio: 3,
                categoryName: 'Juu'
            },
            {
                ratio: 3,
                categoryName: 'Ju2u'
            },
        ];

        return (
            <div className="content">
                <StockShareCard stockCategoryValues={data}/>
            </div>
        );
    }
}

const mapStateToProps = ( state: AppState ) => ({
    accountValue: state.depot.accountValue,
    stockValue: state.depot.stockValue,
    stockValueDevelopment: state.depot.stockValueDevelopment,
    stockCategoryValues: state.depot.stockCategoryValues
});

// tslint:disable-next-line: no-any
const mapDispatchToProps = ( dispatch: any ) => ({});

export default connect( mapStateToProps, mapDispatchToProps )( Dashboard );