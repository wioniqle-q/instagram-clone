import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
import Profile from "./Components/Profile/Profile";


function App() {
  return (
    <div className="bg-gray-100" >
      <div className="bg-white">
        <Header />
      </div>
      <div className="max-w-4xl mx-auto min-h-screen">
      <Switch>
        <Route path={"/:username"} component={Profile} />
        <Route exact path="/" component={HomePage} />
      </Switch>

      </div>
    </div>

  );
}

export default App;
