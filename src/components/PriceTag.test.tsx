import * as React from 'react';
import { configure, mount } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { PriceTag } from './PriceTag';

configure( { adapter: new ReactSixteenAdapter() } );

describe( '<PriceTag />', () => {
    it( 'should not explode', () => {
        const component = mount( <PriceTag value={15.2}/> );
        expect( component ).not.toBeNull();
    } );
} );
