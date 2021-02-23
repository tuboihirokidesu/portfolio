import { Route, RouteComponentProps, Switch } from "react-router-dom";
import routes from "./config/routes";
import GlobalStyle from "./globalStyle";
import ShoppingCart from "./pages/project3/ShoppingCart";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => (
                <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                />
              )}
            />
          );
        })}
        <ShoppingCart />
      </Switch>
    </>
  );
};

export default App;
