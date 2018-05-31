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
            <button
                className="material-icons icon-button icon-button-remove"
                onClick={() => this.props.onClick()}
            >
                remove_circle_outline
            </button>
        );
    }
}