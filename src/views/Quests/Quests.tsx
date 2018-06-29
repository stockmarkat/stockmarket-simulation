import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AppState, Quest } from '../../state/AppState';
import { QuestCard } from './Cards/QuestCard';

interface QuestsProps {
    quests: Quest[];
}

interface QuestsState {
}

class Quests extends React.Component<QuestsProps, QuestsState> {

    constructor(props: QuestsProps) {
        super(props);
    }

    render() {

        const { quests } = this.props;

        return (
            <div className="content">
                <Grid fluid={true}>
                    <Row>
                        {
                            // TODO split quest list
                            quests.map(quest => {
                                return (
                                    <Col key={quest.name} xs={12}>
                                        <QuestCard
                                            quest={quest}
                                        />
                                    </Col>
                                );
                            })

                        }
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    quests: state.quests.quests
});

// tslint:disable-next-line: no-any
const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Quests);
