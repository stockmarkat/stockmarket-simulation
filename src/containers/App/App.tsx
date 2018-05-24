import * as React from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Route, Switch } from 'react-router-dom';
import appRoutes from '../../routes/routes';
import { connect } from 'react-redux';
import { NotificationSystemFrame } from '../../components/NotificationSystem';
import { loadState } from '../../state/initialLoad/initialLoadActions';

interface AppProps {
    loadState: () => void;
}

interface AppRootState {
}

class App extends React.Component<AppProps, AppRootState> {

    constructor(props: AppProps) {
        super(props);
    }

    componentDidMount() {
        this.props.loadState();
    }

    render() {
        return (

            <div className="wrapper">
                <NotificationSystemFrame/>
                <Sidebar {...this.props} />
                <div id="main-panel" className="main-panel">
                    <Header {...this.props}/>
                    <Switch>
                        {
                            appRoutes.map( ( prop, key ) => {
                                return (
                                    <Route path={prop.path} component={prop.component} key={key}/>
                                );
                            } )
                        }
                    </Switch>
                    <Footer/>
                </div>
            </div>
        );
    }
}

// tslint:disable-next-line: no-any
const mapDispatchToProps = (dispatch: any) => ({
    loadState: () =>
        dispatch(loadState())
});

export default connect(null, mapDispatchToProps)(App);