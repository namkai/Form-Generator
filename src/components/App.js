import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import configureStore from '../store';
import '../style/App.css';
import Tabs from './common/Tabs';

const store = configureStore();
export const history = createBrowserHistory();


const App = () => (
	<Provider store={store}>
		<Router history={history}>
			<div className="App">
				<Tabs />
				<Switch>
					<Route exact path={routes.CREATE_TAB} />
					<Route exact path={routes.EXPORT_TAB} />
					<Route exact path={routes.PREVIEW_TAB} />
				</Switch>
			</div>
		</Router>
	</Provider>
);

export default App;
