import * as React from 'react';
import { Card } from '../../../components/Card/Card';
import { StockType } from '../../../state/AppState';
import { getCorrectIconForType } from '../../../util/GetCorrectIcon';
import { PriceTag } from '../../../components/PriceTag';
import { Col, Row } from 'react-bootstrap';

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
                <Row>
                    <Col sm={4} xs={6}>
                        <i
                            style={{
                                fontSize: '10vmin',
                                float: 'left'
                            }}
                            className={getCorrectIconForType( type ) + ' center-block'}
                        />
                    </Col>
                    <Col sm={8} xs={6}>
                        <h4
                            style={{
                                marginBottom: '0.5em'
                            }}
                            className="title text-underline"
                        >
                            {name}
                        </h4>
                        <table>
                            <tbody>
                            <tr>
                                <td className="bold">Price:</td>
                                <td className="stockDetails"><PriceTag value={price}/></td>
                            </tr>
                            <tr>
                                <td className="bold">Owning:</td>
                                <td className="stockDetails">{quantity}</td>
                            </tr>
                            <tr className="small-padding-top">
                                <td className="bold">Total:</td>
                                <td className="stockDetails"><PriceTag value={price * quantity}/></td>
                            </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Card>
        );
    }
}