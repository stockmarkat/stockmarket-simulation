import * as React from 'react';

interface AddButtonProps {
    onClick: () => void;
}

interface AddButtonState {
}

export class AddButton extends React.Component<AddButtonProps, AddButtonState> {

    constructor( props: AddButtonProps ) {
        super( props );
    }

    render() {
        return (
            <i
                className="material-icons icon-button icon-button-add"
                onClick={() => this.props.onClick()}
            >
                add_circle_outline
            </i>
        );
    }
}