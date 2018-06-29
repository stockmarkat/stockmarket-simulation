import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

interface CardTableRowProps {
    name: string;
    value: string | number | string[];
}

interface CardTableRowState {
}

export class CardTableRow extends React.PureComponent<CardTableRowProps, CardTableRowState> {

    constructor(props: CardTableRowProps) {
        super(props);
    }

    render() {
        const { name, value } = this.props;

        return (
            <Row

            >
                <Col
                    className="bold"
                    xs={6}
                >
                    {name}
                </Col>
                <Col
                    xs={6}
                >
                    {Array.isArray(value) ? value.map((v, i) => {
                        return <div key={i}>{v}</div>;
                    }) : value}
                </Col>
            </Row>
        );
    }
}