import * as React from 'react';
import { configure, mount } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { Card } from './Card';

configure( { adapter: new ReactSixteenAdapter() } );

describe( '<Card />', () => {
    it( 'should not explode', () => {
        const component = mount( <Card/> );
        expect( component ).not.toBeNull();
    } );
} );
