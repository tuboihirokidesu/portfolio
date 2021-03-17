import React, { useReducer } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import routes from 'config/routes';
import GlobalStyle from 'globalStyle';
import projectRoutes from 'config/projectRoutes';
import Shop from 'pages/project3/Shop';
import Cart from 'pages/project3/Cart';
import {
  CartContextProvider,
  cartReducer,
  initialCartState,
} from 'components/project3/cart';

const App = () => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const cartContextValues = {
    cartState,
    cartDispatch,
  };
  return (
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
              <CartContextProvider value={cartContextValues}>
                <Route
                  path={`${url}/shopping-cart`}
                  exact={false}
                  component={Shop}
                />
                <Route path={`${url}/cart`} exact={false} component={Cart} />
              </CartContextProvider>
            </Switch>
          )}
        />
      </Switch>
    </>
  );
};

export default App;
