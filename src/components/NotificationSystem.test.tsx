import * as React from 'react';
import { configure, mount } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { NotificationSystemFrame } from './NotificationSystem';

configure( { adapter: new ReactSixteenAdapter() } );

describe( '<NotificationSystemFrame />', () => {
    it( 'should not explode', () => {
        const component = mount( <NotificationSystemFrame/> );
        expect( component ).not.toBeNull();
    } );
} );
