import * as React from 'react';
import { Card } from '../../../components/Card/Card';
import { Quest } from '../../../state/AppState';
import { GoodieList } from './GoodieList';
import { TaskList } from './TaskList';
import { ProgressBar } from 'react-bootstrap';

interface QuestCardProps {
    quest: Quest;
}

export class QuestCard extends React.Component<QuestCardProps> {

    render() {
        const {quest} = this.props;

        return (
            <Card noFooter={true} noHeader={true}>
                <i className={quest.iconName} />
                <h4 className="title">{quest.name}</h4>
                <GoodieList goodies={quest.goodies}/>
                <TaskList tasks={quest.tasks}/>
                <h5 className="small-margin">Progress</h5>
                <ProgressBar bsStyle="success" now={quest.progress} label={`${quest.progress}%`}/>
            </Card>
        );
    }
}