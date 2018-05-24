import * as React from 'react';
import { configure, mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { Footer } from './Footer';

configure( { adapter: new ReactSixteenAdapter() } );

describe( '<Footer />', () => {

    let mountedComponent: ReactWrapper<{}, {}>;
    let shallowedComponent: ShallowWrapper<{}, {}>;

    beforeAll( () => {
        mountedComponent = mount( <Footer/> );
        shallowedComponent = shallow( <Footer/> );
    } );

    it( 'shallow Snapshot matches', () => {
        expect( shallowedComponent ).toMatchSnapshot();
    } );

    it( 'Footer should not explode', () => {
        expect( mountedComponent ).not.toBeNull();
    } );

    it( 'Footer renders <footer>', () => {
        expect( mountedComponent.find( 'footer' ).children() ).toHaveLength( 1 );
    } );
} );
