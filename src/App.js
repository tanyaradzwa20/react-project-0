import {Switch, Route,} from "react-router-dom"
import AllMeetups from './components/pages/AllMeetups'

function App() {
  return (
    <div className='app'>
   
      <Switch>
        <Route exact path="/" component={<AllMeetups />}>
          <AllMeetups/>
        </Route>
      </Switch>
 
    </div>
  );
}

export default App;
