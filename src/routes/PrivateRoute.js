import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
function PrivateRoute({ children, ...rest }) {
  const auth = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.token ? (
          children
        ) : (
          <Redirect to={{ pathname: "/auth", state: { from: location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
