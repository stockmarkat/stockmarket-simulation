import * as React from 'react';

interface BuyButtonProps {
    onClick: () => void;
}

interface BuyButtonState {
}

export class BuyButton extends React.Component<BuyButtonProps, BuyButtonState> {

    constructor( props: BuyButtonProps ) {
        super( props );
    }

    render() {
        return (
            <i
                className="material-icons icon-button icon-button-add"
                onClick={() => this.props.onClick()}
            >
                BUY
            </i>

        ); // add_circle_outline
    }
}