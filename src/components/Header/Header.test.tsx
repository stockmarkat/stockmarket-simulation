import * as React from 'react';
import { configure, mount, shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { Header } from './Header';

configure( { adapter: new ReactSixteenAdapter() } );

describe( '<Header />', () => {
    it( 'shallow Snapshot matches', () => {
        const component = shallow( <Header /> );
        expect( component ).toMatchSnapshot();
    } );

    it( 'Header should not explode', () => {
        const component = mount( <Header /> );
        expect( component ).not.toBeNull();
    } );
} );
