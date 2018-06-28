import * as React from 'react';
import { Card } from '../../../components/Card/Card';
import { Quest } from '../../../state/AppState';

interface QuestCardProps {
    quest: Quest;
}

interface QuestCardState {
}

export class QuestCard extends React.Component<QuestCardProps, QuestCardState> {

    constructor(props: QuestCardProps) {
        super(props);
    }

    render() {
        return (
            <Card noFooter={true} noHeader={true}>
                <pre>{JSON.stringify(this.props.quest)}</pre>
            </Card>
        );
    }
}