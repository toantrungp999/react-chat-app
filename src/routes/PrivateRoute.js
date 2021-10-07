import { Route, Redirect } from "react-router-dom";
import { auth } from "utils/firebaseConfig";
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.currentUser ? (
          children
        ) : (
          <Redirect to={{ pathname: "/auth", state: { from: location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
