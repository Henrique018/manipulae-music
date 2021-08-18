import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'templates/Home';
import Favorites from 'templates/Favorites';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/favorites" exact component={Favorites} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
