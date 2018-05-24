import * as React from 'react';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { RemoveButton } from './RemoveButton';

configure( { adapter: new ReactSixteenAdapter() } );

describe( 'RemoveButton', () => {
    it( 'should not explode', () => {
        // tslint:disable:no-empty
        const buttonClicked = jest.fn( () => { } );
        const component = shallow( <RemoveButton onClick={buttonClicked}/> );
        expect( component ).not.toBeNull();
    } );
    it( 'should call on clicked', () => {
        // tslint:disable:no-empty
        const buttonClicked = jest.fn( () => { } );
        const component = shallow( <RemoveButton onClick={buttonClicked}/> );
        expect( component ).not.toBeNull();
        component.simulate( 'click' );
        expect( buttonClicked ).toHaveBeenCalledTimes( 1 );
    } );
} );