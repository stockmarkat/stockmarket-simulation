import * as React from 'react';
import { connect } from 'react-redux';
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
            <div className="wrapper"/>
        );
    }
}

// tslint:disable-next-line: no-any
const mapDispatchToProps = (dispatch: any) => ({
    loadState: () =>
        dispatch(loadState())
});

export default connect(null, mapDispatchToProps)(App);