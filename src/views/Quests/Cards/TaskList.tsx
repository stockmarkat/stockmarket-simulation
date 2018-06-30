import * as React from 'react';
import { QuestTask } from '../../../state/AppState';

interface TaskListProps {
    tasks: QuestTask[];
}

export class TaskList extends React.Component<TaskListProps> {

    render() {
        const {tasks} = this.props;

        return (
            <div>
                <h5 className="small-margin">Tasks</h5>
                <ul>
                    {
                        tasks.map( ( task ) => {
                            const crossed = task.isCompleted ? 'line-trough' : '';

                            return (
                                <li className={crossed} key={task.name}>{task.name}</li>
                            );
                        } )
                    }
                </ul>
            </div>
        );
    }
}