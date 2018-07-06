import * as React from 'react';
import { Col, Row } from 'react-bootstrap';

interface StatusCardProps {
    icon: JSX.Element;
    title: string;
    value: string | JSX.Element;
    statusIcon?: JSX.Element;
    statusText?: string;
    noFooter?: boolean;
}

interface StatusCardState {
}

export class StatusCard extends React.Component<StatusCardProps, StatusCardState> {

    constructor( props: StatusCardProps ) {
        super( props );
    }

    render() {
        return (
            <div className="card card-stats">
                <div className="content">
                    <Row>
                        <Col xs={4}>
                            <div className="icon-big text-center icon-warning">
                                {this.props.icon}
                            </div>
                        </Col>
                        <Col xs={8}>
                            <div className="numbers">
                                <p>{this.props.title}</p>
                                {this.props.value}
                            </div>
                        </Col>
                    </Row>
                    { !this.props.noFooter &&
                        <div className="footer">
                            <hr/>
                            <div className="stats">
                                {this.props.statusIcon}{this.props.statusText}
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}