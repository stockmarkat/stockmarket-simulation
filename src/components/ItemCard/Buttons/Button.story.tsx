import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { AddButton } from './AddButton';
import { RemoveButton } from './RemoveButton';

const stories = storiesOf( 'Badges', module );
stories.addDecorator( withKnobs );

stories.add( 'Add Button', () => (
    <AddButton
        onClick={() => {
            console.log( 'AddButton clicked' );
        }}
    />
) );
stories.add( 'Remove Button', () => (
    <RemoveButton
        onClick={() => {
            console.log( 'RemoveButton clicked' );
        }}
    />
) );