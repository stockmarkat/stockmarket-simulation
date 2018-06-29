import * as React from 'react';
import { GoodieView } from './GoodieView';
import { Goodie } from '../../../state/AppState';

interface GoodieListProps {
    goodies: Goodie[];
}

export class GoodieList extends React.Component<GoodieListProps> {

    render() {
        const {goodies} = this.props;

        return (
            <div>
                <h5 className="small-margin">Goodies</h5>
                <ul>
                    {
                        goodies.map( ( goodie, i ) => {
                            return (
                                <li key={i}><GoodieView goodie={goodie}/></li>
                            );
                        } )
                    }
                </ul>
            </div>
        );
    }
}