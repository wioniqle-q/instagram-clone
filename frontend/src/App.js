import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/HomePage";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import Explore from "./Components/Explore/Explore";



function App() {
  return (
    <div className="bg-gray-100 min-h-screen" >
      <div className="bg-white">
        <Header />
      </div>
      <div className="max-w-4xl mx-auto h-full">
        <Switch>
          <Route exact path="/explore" component={Explore} />
          <Route  path="/message" component={Messages} />
          <Route  path={"/:username"} component={Profile} />
          <Route exact path="/" component={HomePage} />
        </Switch>

      </div>
    </div>

  );
}

export default App;
