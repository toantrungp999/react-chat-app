import { Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import Auth from "./features/auth";
import Chat from "./features/chat";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div className="app">
      <Switch>
        <Redirect exact from="/" to="/chat" />
        <Route path="/auth" component={Auth} />
        <PrivateRoute path="/chat">
          <Chat />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
