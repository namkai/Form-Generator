import { createBrowserHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import configureStore from '../store';
import '../style/App.css';
import Tabs from './common/Tabs';
import Create from './create';
import Export from './export';
import Preview from './preview';

const store = configureStore();
export const history = createBrowserHistory();


const App = () => (
	<Provider store={store}>
		<Router history={history}>
			<div className="App">
				<Tabs />
				<Switch>
					<Route exact path={routes.CREATE_TAB} component={Create}/>
					<Route exact path={routes.EXPORT_TAB} component={Export}/>
					<Route exact path={routes.PREVIEW_TAB} component={Preview}/>
				</Switch>
			</div>
		</Router>
	</Provider>
);

export default App;
