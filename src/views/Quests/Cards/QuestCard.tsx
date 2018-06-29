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
        const label = quest.progress > 0 ? `${quest.progress.toFixed( 0 )}%` : '';

        return (
            <Card noFooter={true} noHeader={true}>
                <i className={quest.iconName}/>
                <h4 className="title">{quest.name}</h4>
                <GoodieList goodies={quest.goodies}/>
                <TaskList tasks={quest.tasks}/>
                {!quest.isCompleted &&
                <h5 className="small-margin">Progress</h5> &&
                <ProgressBar striped={true} bsStyle="success" now={quest.progress} label={label}/>
                }
            </Card>
        );
    }
}