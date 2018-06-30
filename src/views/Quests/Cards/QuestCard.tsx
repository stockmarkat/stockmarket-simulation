import * as React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Card } from '../../../components/Card/Card';
import { Quest } from '../../../state/AppState';
import { GoodieList } from './GoodieList';
import { TaskList } from './TaskList';

interface QuestCardProps {
    quest: Quest;
}

export class QuestCard extends React.Component<QuestCardProps> {

    render() {
        const { quest } = this.props;
        const label = quest.progress > 0 ? `${quest.progress.toFixed(0)}%` : '';

        return (
            <Card noFooter={true} noHeader={true}>
                <i className={quest.iconName}/>
                <h4 className="title">{quest.name}</h4>
                <TaskList tasks={quest.tasks}/>
                <GoodieList goodies={quest.goodies}/>
                {!quest.isCompleted &&
                <h5 className="small-margin">Progress</h5> &&
                <ProgressBar striped={true} bsStyle="success" now={quest.progress} label={label}/>
                }
            </Card>
        );
    }
}