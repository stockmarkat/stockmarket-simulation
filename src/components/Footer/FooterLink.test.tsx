import * as React from 'react';
import { configure, mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { FooterLink, FooterLinkProps, FooterLinkState } from './FooterLink';

configure( { adapter: new ReactSixteenAdapter() } );

describe( '<FooterLink />', () => {

    let mountedComponent: ReactWrapper<FooterLinkProps, FooterLinkState>;
    let shallowedComponent: ShallowWrapper<FooterLinkProps, FooterLinkState>;

    beforeAll( () => {
        mountedComponent = mount( <FooterLink to="testlink">Test Text</FooterLink> );
        shallowedComponent = shallow( <FooterLink to="testlink">Test Text</FooterLink> );
    } );

    it( 'shallow Snapshot matches', () => {
        expect( shallowedComponent ).toMatchSnapshot();
    } );

    it( 'FooterLink should not explode', () => {
        expect( mountedComponent ).not.toBeNull();
    } );

    it( 'Footerlink renders <li>', () => {
        expect( mountedComponent.find( 'li' ).children() ).toHaveLength( 1 );
    } );

    it( 'Footerlink renders link in Href', () => {
        mountedComponent.setProps( { to: 'hello' } );
        expect( mountedComponent.find( 'li' ).children().find( 'a' ).props().href ).toBe( 'hello' );
    } );
} );
