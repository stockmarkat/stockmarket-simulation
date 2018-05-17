import * as React from 'react';

interface RemoveButtonProps {
    onClick: () => void;
}

interface RemoveButtonState {
}

export class RemoveButton extends React.Component<RemoveButtonProps, RemoveButtonState> {

    constructor( props: RemoveButtonProps ) {
        super( props );
    }

    render() {
        return (
            <i
                className="material-icons icon-button icon-button-remove"
                onClick={() => this.props.onClick()}
            >
                remove_circle_outline
            </i>
        );
    }
}