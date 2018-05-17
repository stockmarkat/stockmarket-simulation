import * as React from 'react';
import { configure, mount } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import { ItemCard } from './ItemCard';

configure( { adapter: new ReactSixteenAdapter() } );

describe( '<ItemCard />', () => {
    it( 'should not explode', () => {
        const component = mount(
            <ItemCard
                itemName={'ItemName'}
                itemIcon={'icon'}
                itemQuantity={5}
                buyPrice={5.2}
                sellPrice={4.3}
                onAddItem={() => {}}
                onRemoveItem={() => {}}
            />
        );
        expect( component ).not.toBeNull();
    } );

    it( 'should not explode without price', () => {
        const component = mount(
            <ItemCard
                itemName={'ItemName'}
                itemIcon={'icon'}
                itemQuantity={5}
                onAddItem={() => {}}
                onRemoveItem={() => {}}
            />
        );
        expect( component ).not.toBeNull();
    } );

    it( 'should not explode with quantity 0', () => {
        const component = mount(
            <ItemCard
                itemName={'ItemName'}
                itemIcon={'icon'}
                itemQuantity={0}
                onAddItem={() => {}}
                onRemoveItem={() => {}}
            />
        );
        expect( component ).not.toBeNull();
    } );
} );
