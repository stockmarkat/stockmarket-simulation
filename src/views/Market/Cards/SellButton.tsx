import * as React from 'react';

interface SellButtonProps {
    onClick: () => void;
}

interface SellButtonState {
}

export class SellButton extends React.Component<SellButtonProps, SellButtonState> {

    constructor( props: SellButtonProps ) {
        super( props );
    }

    render() {
        return (
            <i
                className="material-icons icon-button icon-button-add"
                onClick={() => this.props.onClick()}
            >
                SELL
            </i>

        ); // add_circle_outline
    }
}