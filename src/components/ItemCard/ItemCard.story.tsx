import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { ItemCard } from './ItemCard';
import { Col, Grid, Row } from 'react-bootstrap';

const stories = storiesOf( 'ItemCard', module );
stories.addDecorator( withKnobs );

stories.add( 'ItemCard customise', () => (
    <div className="content">
        <Grid fluid={true}>
            <Row>
                <Col lg={3} sm={6}>
                    <ItemCard
                        itemName={text( 'itemName', 'Cardboard' )}
                        itemIcon={text( 'itemIcon', 'C' )}
                        buyPrice={number( 'buyPrice', 1 )}
                        sellPrice={number( 'sellPrice', 1 )}
                        itemQuantity={number( 'itemQuantity', 0 )}
                        onRemoveItem={() => {
                            // tslint:disable:no-console
                            console.log( 'onRemoveItem' );
                        }}
                        onAddItem={() => {
                            // tslint:disable:no-console
                            console.log( 'onAddItem' );
                        }}
                    />
                </Col>
            </Row>
        </Grid>
    </div>
) );