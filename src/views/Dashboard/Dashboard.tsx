import * as React from 'react';
import { Cell, Legend, Pie, PieChart } from 'recharts';
import { AppState, FinancialSnapshot, StockCategoryValue } from '../../state/AppState';
import { connect } from 'react-redux';

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

        const pieData = data.map( ( value ) => {
            return {
                name: value.categoryName,
                value: value.ratio
            };
        } ); // TODO make own component
        const colors = ['#2632c1',
            '#87CB16', '#943bea', '#FF9500', '#EE2D20'];

        return (
            <div className="content">
                <PieChart width={400} height={400}>
                    <Legend height={30} verticalAlign={'top'}/>
                    <Pie
                        data={pieData}
                        label={false}
                        dataKey="value"
                        legendType="square"
                    >
                        {
                            data.map( ( entry, index ) => (
                                <Cell key={`cell-${index}`} fill={colors[index]}/>
                            ) )
                        }
                    </Pie>
                </PieChart>
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