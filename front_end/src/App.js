import React from 'react' ;
import {
  BrowserRouter as Router ,
  Switch ,
  Route
} from 'react-router-dom' ;
import { Login } from './pages/Login' ;
import { Dashboard } from './pages/Dashboard' ;
import { CreateList } from './pages/CreateList' ;
import { AddItem } from './pages/Add_Item' ;
import { Register } from './pages/Register';
import { RemoveItem } from './pages/Remove_item';
import { ShowList } from './pages/ShowList' ;
 
function App() {

  return (

    <div>

      <Router>

        <Switch>

          <Route exact path = "/Register" component = { Register } />

          <Route exact path = "/Login" component = { Login } />

          <Route exact path = "/Dashboard" component = { Dashboard } />

          <Route exact path = "/ShowList" component = { ShowList } />
          
          <Route exact path = "/CreateList" component = { CreateList } />

          <Route exact path = '/AddItem' component = { AddItem } />

          <Route exact path = "/RemoveItem" component = { RemoveItem } />
          
        </Switch>

      </Router>  

    </div>
  );
}

export default App;
