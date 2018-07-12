import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { NotificationSystemFrame } from '../../components/NotificationSystem';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import appRoutes from '../../routes/routes';
import { AppState } from '../../state/AppState';
import { getStockValue } from '../../state/depot/depotSelector';
import { loadState } from '../../state/initialLoad/initialLoadActions';

interface AppProps {
    currentMoney: number;
    currentStockBalance: number;
    loadState: () => void;
}

class App extends React.Component<AppProps> {

    constructor(props: AppProps) {
        super(props);
    }

    componentWillMount() {
        this.props.loadState();
    }

    render() {
        return (

            <div className="wrapper">
                <NotificationSystemFrame/>
                <Sidebar
                    currentBalance={this.props.currentMoney}
                    currentStockBalance={this.props.currentStockBalance}
                />
                <div id="main-panel" className="main-panel">
                    <Header {...this.props} />
                    <Switch>
                        {
                            appRoutes.map((prop, key) => {
                                if (prop.redirect) {
                                    return (<Redirect path={prop.path} to={prop.to!} key={key}/>);
                                }
                                return (
                                    <Route path={prop.path} component={prop.component} key={key}/>
                                );
                            })
                        }
                    </Switch>
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    currentMoney: state.depot.accountValue,
    currentStockBalance: getStockValue(state)
});

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: any) => ({
    loadState: () =>
        dispatch(loadState())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);