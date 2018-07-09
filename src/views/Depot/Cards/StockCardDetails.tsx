import * as React from 'react';
import { PriceTag } from '../../../components/PriceTag';

interface StockCardDetailsProps {
    name: string;
    quantity: number;
    price: number;
}

export class StockCardDetails extends React.PureComponent<StockCardDetailsProps> {

    render() {
        const {quantity, price, name} = this.props;

        return (
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
        );
    }
}