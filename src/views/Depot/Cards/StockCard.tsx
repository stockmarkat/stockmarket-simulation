import * as React from 'react';
import { Card } from '../../../components/Card/Card';
import { StockType } from '../../../state/AppState';
import { getCorrectIconForType } from '../../../util/GetCorrectIcon';
import { Col, Row } from 'react-bootstrap';
import { getColor } from '../../../util/colorNormalize';
import { StockCardDetails } from './StockCardDetails';

interface StockCardProps {
    name: string;
    price: number;
    type: StockType;
    quantity: number; // count of owned stocks
}

export class StockCard extends React.PureComponent<StockCardProps> {

    render() {
        const {type, name, price, quantity} = this.props;

        return (
            <Card noHeader={true} noFooter={true}>
                <Row className="vertical-center">
                    <Col xs={3} sm={4} className="horizontal-center">
                        <i
                            style={{
                                fontSize: '6em',
                                color: getColor( type ),
                            }}
                            title={type}
                            className={getCorrectIconForType( type ) + ' vertical-center'}
                        />
                    </Col>
                    <Col xs={9} sm={8} className="horizontal-center">
                        <StockCardDetails name={name} quantity={quantity} price={price} />
                    </Col>
                </Row>
            </Card>
        );
    }
}