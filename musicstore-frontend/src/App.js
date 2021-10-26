import { React,Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DelInstrumentDetail from './component/DelInst'
import PutInstrumentDetail from './component/PutInst'
import GetInstrumentDetail from './component/GetInst'
import PostInst from './component/PostInst'
import Dashboard from './component/Dashboard'


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render(){
        return(
            <>
            <Router>
            <Switch>
             <Route path="/delete-instrument">
               <DelInstrumentDetail />
            </Route>
              <Route path="/update-instrument">
                <PutInstrumentDetail />
            </Route>
              <Route path="/list-instrument">
                <GetInstrumentDetail />
            </Route>
            <Route path="/create-instrument">
              <PostInst />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
             </Switch>
            </Router>
            </>
        );
    }
}




export default App;
