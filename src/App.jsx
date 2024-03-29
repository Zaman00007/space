import React from "react";
import Earth from "./components/Earth";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Neptune from "./components/Neptune";
import Saturn from "./components/Saturn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
const API_URL = 'https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2016-09-30&mostAccurateOnly=true&speed=500&halfAngle=30&catalog=ALL&api_key=EMTkcLCSO1ZdgNMp6U1JGICVh1iqgg2yonmguwcc';


fetch(`${API_URL}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Earth/>
          </Route>
          <Route path="/Mars" exact>
            <Mars/>
          </Route>
          <Route path="/Jupiter" exact>
            <Jupiter/>
          </Route>
          <Route path="/Saturn" exact>
            <Saturn/>
          </Route>
          <Route path="/Neptune" exact>
            <Neptune/>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
};

export default App;
