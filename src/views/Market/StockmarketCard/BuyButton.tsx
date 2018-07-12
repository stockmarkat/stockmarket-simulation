import * as React from 'react';

interface BuyButtonProps {
    onClick: () => void;
}

export class BuyButton extends React.PureComponent<BuyButtonProps> {

    render() {
        return (
            <button
                className="material-icons icon-button icon-button-add"
                onClick={() => this.props.onClick()}
            >
                add_circle_outline
            </button>
        );
    }
}