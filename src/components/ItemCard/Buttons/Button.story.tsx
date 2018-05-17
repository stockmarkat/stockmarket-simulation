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
            // tslint:disable:no-console
            console.log( 'AddButton clicked' );
        }}
    />
) );
stories.add( 'Remove Button', () => (
    <RemoveButton
        onClick={() => {
            //  tslint:disable:no-console
            console.log( 'RemoveButton clicked' );
        }}
    />
) );