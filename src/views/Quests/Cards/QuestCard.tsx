import * as React from 'react';
import { Card } from '../../../components/Card/Card';
import { Quest } from '../../../state/AppState';
import { GoodieView } from './GoodieView';

interface QuestCardProps {
    quest: Quest;
}

export class QuestCard extends React.Component<QuestCardProps> {

    render() {
        const {quest} = this.props;

        return (
            <Card noFooter={true} noHeader={true}>
                <h4 className="title">{quest.name}</h4>
                <ul>
                {
                    quest.goodies.map((goodie, i) => {
                      return (
                        <li key={i}><GoodieView goodie={goodie}/></li>
                      );
                    })
                }
                </ul>
                <pre>{JSON.stringify(this.props.quest)}</pre>
            </Card>
        );
    }
}