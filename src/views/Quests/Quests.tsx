import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { AppState, Quest } from '../../state/AppState';
import { QuestCard } from './Cards/QuestCard';
import { getActiveQuests, getCompletedQuests } from '../../state/quests/questSelectors';
import { dateSortDescending } from './SortsQuests';

interface QuestsProps {
    activeQuests: Quest[];
    completedQuests: Quest[];
}

class Quests extends React.Component<QuestsProps> {

    getActiveQuestsView( activeQuests: Quest[] ) {
        return (
            <div>
                <Col xs={12} key={1}>
                    <h3>Active Quests</h3>
                    {activeQuests.map( quest => {
                        return (
                            <QuestCard
                                key={quest.name}
                                quest={quest}
                            />
                        );
                    } )}
                </Col>
            </div>
        );
    }

    getCompletedQuestsView( completedQuests: Quest[] ) {
        return (
            <div>
                <Col xs={12} key={1}>
                    <h3>Completed Quests</h3>
                    {completedQuests.map( quest => {
                        return (
                            <QuestCard
                                key={quest.name}
                                quest={quest}
                            />
                        );
                    } )}
                </Col>
            </div>
        );
    }

    render() {

        const {activeQuests, completedQuests} = this.props;

        return (
            <div className="content">
                <Grid fluid={true}>
                    <Row>
                        {
                            activeQuests.length > 0 &&
                            this.getActiveQuestsView( activeQuests )
                        }
                    </Row>
                    {activeQuests.length > 0 && completedQuests.length > 0 && <hr/>}
                    <Row>
                        {
                            completedQuests.length > 0 &&
                            this.getCompletedQuestsView( completedQuests )
                        }
                    </Row>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ( state: AppState ) => ({
    activeQuests: getActiveQuests( state ),
    completedQuests: getCompletedQuests( state ).sort( dateSortDescending ),
});

// tslint:disable-next-line: no-any
const mapDispatchToProps = ( dispatch: any ) => ({});

export default connect( mapStateToProps, mapDispatchToProps )( Quests );
