import React from "react";
import Routes from "./Routing";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import * as actions from "./Redux/Actions/Auth.Action";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
const BrowserHistory = createBrowserHistory({});

function PrivateRoute({ component: Component, authData, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !!authData ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location, authData }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => ({
  roles: state.auth.roles
});

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(actions, dispatch)
});

class App extends React.Component {
  state = {
    authData: null
  };

  componentDidMount() {
    this.props.authActions.UpdateRoles([
      "user",
      "admin",
      "superAdmin",
      "role1",
      "role2"
    ]);
  }
  render() {
    const { roles } = this.props;
    return (
      <Router history={BrowserHistory}>
        <div>
          <h1>Page</h1>
          <ul>
            {roles.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
          <Switch>
            {Routes.map((routeConfig, routeIndex) =>
              routeConfig.isAuthenticated ? (
                <PrivateRoute
                  path={routeConfig.path}
                  exact={routeConfig.exact}
                  component={routeConfig.component}
                  authData={this.state.authData}
                />
              ) : (
                <Route
                  path={routeConfig.path}
                  exact={routeConfig.exact}
                  component={routeConfig.component}
                />
              )
            )}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
