import * as React from 'react';
import { Card } from '../../../components/Card/Card';
import { Stock } from '../../../state/AppState';
import { StockConfig } from '../../../state/Config';
import { Grid, Row, Col } from 'react-bootstrap';
import { StockDetails } from './StockDetails';
import { BuyOrSellView } from './BuyOrSellView';
import FinancialDevelopmentChart from '../../../components/Charts/FinancialDevelopmentChart';

interface StockCardProps {
    stock: Stock;
    onBuy: ( amount: number ) => void;
    onSell: ( amount: number ) => void;
}

export default class StockmarketCard extends React.Component<StockCardProps> {

    render() {
        const {stock, onBuy, onSell} = this.props;

        // TODO: improve performance

        return (
            <Card noHeader={true} noFooter={true}>
                <Grid fluid={true}>
                    <Row>
                        <Col xs={12} smPush={4} sm={8} lgPush={3} lg={9} style={{paddingLeft: 0}}>
                            <FinancialDevelopmentChart
                                valueHistory={stock.valueHistory}
                                interval={StockConfig.points() / 6}
                            />
                        </Col>
                        <Col xs={12} smPull={8} sm={4} lgPull={9} lg={3} style={{paddingRight: 0}}>
                            <h4 className="title text-underline">{stock.name}</h4>
                            <br/>
                            <StockDetails stock={stock}/>
                            <br/>
                            <BuyOrSellView onBuy={onBuy} onSell={onSell} />
                        </Col>
                    </Row>
                </Grid>
            </Card>
        );
    }
}