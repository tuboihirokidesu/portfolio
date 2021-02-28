import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import routes from 'config/routes';
import GlobalStyle from 'globalStyle';
import ShoppingCart from 'pages/project3/ShoppingCart';

const App = () => (
  <>
    <GlobalStyle />
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.id}
          path={route.path}
          exact={route.exact}
          render={(props: RouteComponentProps<any>) => (
            <route.component name={route.name} {...props} {...route.props} />
          )}
        />
      ))}
      <ShoppingCart />
    </Switch>
  </>
);

export default App;
