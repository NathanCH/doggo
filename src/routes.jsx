import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './layout/Layout.jsx';
import Home from './page/Home.jsx';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />
		<Route path="home" component={Home} title="Home" />
	</Route>
);

export default routes;