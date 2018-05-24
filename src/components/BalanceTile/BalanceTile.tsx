import * as React from 'react';
import * as Row from 'react-bootstrap/lib/Row';
import * as Col from 'react-bootstrap/lib/Col';
import { PriceTag } from '../PriceTag';

interface BalanceTileProps {
    icon: JSX.Element;
    title: string;
    value: number;
}

interface BalanceTileState {
}

export class BalanceTile extends React.Component<BalanceTileProps, BalanceTileState> {

    constructor( props: BalanceTileProps ) {
        super( props );
    }

    render() {
        return (
            <div className="card card-stats">
                <div className="content">
                    <Row>
                        <Col xs={5}>
                            <div className="icon-big text-center icon-warning">
                                {this.props.icon}
                            </div>
                        </Col>
                        <Col xs={7}>
                            <div className="numbers">
                                <p>{this.props.title}</p>
                                <PriceTag value={this.props.value}/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default BalanceTile;