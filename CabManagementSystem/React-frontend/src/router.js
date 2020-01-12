import react from 'react';
import {Route, Router} from 'react-router';
import useHistory from 'history/createBrowserHistory';
import Dashboard from './dashboard';

class AppRouter extends react.Component{

   constructor()
   {
      super();
      this.state={}
   }

   render(){
      let history = useHistory();
      return(
         <Router history={history}>
            <Route to="/" component={Dashboard} />
         </Router>

      )
   }

}