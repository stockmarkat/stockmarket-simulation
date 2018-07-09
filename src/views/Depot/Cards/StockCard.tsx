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
                <Row className="vertical-center">
                    <Col xs={4} className="horizontal-center">
                        <i
                            style={{
                                fontSize: '11vmin',
                            }}
                            className={getCorrectIconForType( type )}
                        />
                    </Col>
                    <Col xs={8} className="horizontal-center">
                        <div>
                            <h4 style={{marginBottom: '0.5em'}} className="title text-underline">
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
                                <tr>
                                    <td className="bold text-underline">Total:</td>
                                    <td className="stockDetails"><PriceTag value={price * quantity}/></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </Col>
                </Row>
            </Card>
        );
    }
}