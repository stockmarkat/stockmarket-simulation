import 'material-design-icons/iconfont/material-icons.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import './assets/css/animate.min.css';
import './assets/css/arrows.css';
import './assets/css/bootstrap.min.css';
import './assets/css/demo.css';
import './assets/css/pe-icon-7-stroke.css';
import './assets/sass/light-bootstrap-dashboard.css';

import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore } from './state/configureStore';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <Switch>
                    <Route path="/" component={App}/>
                </Switch>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
