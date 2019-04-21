import React, { Component } from "react";
import "./App.scss";
import Actions from "./actions";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Register from "./containers/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/add"} component={Register} />
        </Switch>

        {/* <button onClick={() => this.props.updateName("mathias")} />
        {JSON.stringify(this.props.name)} */}
      </div>
    );
  }
}

export default App;
