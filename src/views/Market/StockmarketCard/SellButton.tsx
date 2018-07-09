import * as React from 'react';

interface SellButtonProps {
    onClick: () => void;
}

export class SellButton extends React.PureComponent<SellButtonProps> {

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