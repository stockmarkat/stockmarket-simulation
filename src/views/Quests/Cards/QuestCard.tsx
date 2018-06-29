import * as React from 'react';
import { Card } from '../../../components/Card/Card';
import { Quest } from '../../../state/AppState';
import { GoodieList } from './GoodieList';
import { TaskList } from './TaskList';

interface QuestCardProps {
    quest: Quest;
}

export class QuestCard extends React.Component<QuestCardProps> {

    render() {
        const {quest} = this.props;

        return (
            <Card noFooter={true} noHeader={true}>
                <h4 className="title">{quest.name}</h4>
                <GoodieList goodies={quest.goodies}/>
                <TaskList tasks={quest.tasks}/>
                <pre>{JSON.stringify( this.props.quest )}</pre>
            </Card>
        );
    }
}