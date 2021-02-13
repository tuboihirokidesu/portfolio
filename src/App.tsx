import { Route, RouteComponentProps, Switch } from "react-router-dom";
import routes from "./config/routes";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
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
      </Switch>
    </>
  );
};

export default App;
