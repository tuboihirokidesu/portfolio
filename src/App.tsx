import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import routes from 'config/routes';
import GlobalStyle from 'globalStyle';
import projectRoutes from 'config/projectRoutes';

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
      <Route
        path="/portfolio/project"
        render={({ match: { url } }) => (
          <Switch>
            {projectRoutes.map((route) => (
              <Route
                key={route.id}
                path={`${url}${route.path}`}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        )}
      />
    </Switch>
  </>
);

export default App;
