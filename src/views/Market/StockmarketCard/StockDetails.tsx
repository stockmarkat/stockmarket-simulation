import * as React from 'react';
import { getCorrectIconForType } from '../../../util/GetCorrectIcon';
import { Stock } from '../../../state/AppState';
import { PriceTag } from '../../../components/PriceTag';

interface StockDetailsProps {
    stock: Stock;
}

export class StockDetails extends React.Component<StockDetailsProps> {

    getArrowIcon( valueChange: number ) {
        if (valueChange > 0) {
            return 'icon-arrow-up';
        } else if (valueChange < 0) {
            return 'icon-arrow-down';
        } else {
            return 'icon-arrow-straight';
        }
    }

    getColor( valueChange: number ) {
        if (valueChange > 0) {
            return 'green';
        } else if (valueChange < 0) {
            return 'red';
        } else {
            return '';
        }
    }

    render() {
        const {stock} = this.props;

        return (
            <table>
                <tbody>
                <tr>
                    <td className="bold">Price:</td>
                    <td className="stockDetails"><PriceTag value={stock.value}/></td>
                </tr>
                <tr>
                    <td className="bold">Category:</td>
                    <td className="stockDetails small-padding-top">
                        <i title={stock.type} className={getCorrectIconForType( stock.type ) + ' category-icon'}/>
                    </td>
                </tr>
                <tr>
                    <td className="bold">Change:</td>
                    <td className={'stockDetails ' + this.getColor( stock.valueChange )}>
                        {stock.valueChange.toFixed( 2 )}%
                        &nbsp;
                        <i className={this.getArrowIcon( stock.valueChange )}/>
                    </td>
                </tr>
                <tr className="small-padding-top">
                    <td className="bold">Owning:</td>
                    <td className="stockDetails">{stock.quantity}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}