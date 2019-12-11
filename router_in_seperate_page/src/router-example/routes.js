import React,{Component} from 'react';
import {Route} from 'react-router';

//   import App from '../App';

  import About from '../common-component/About';
  import NoMatch from '../common-component/NoMatch';
  
  import Users from '../user-component/Users';
  import User from '../user-component/User';

  class Routes extends Component {
    render(){
        return (
            <div>

                <Route path="/about" component={About}/>
                <Route path="/users" component={Users}/>
                <Route path="/user" component={User}/>
                      
            </div>
        );
    }
}

// const routes = (
//     <Route path="/" component={App}>
//       <Route path="about" component={About} />
//       <Route path="users" component={Users}>
//         <Route path="/user/:userId" component={User} />
//       </Route>
//       <Route path="*" component={NoMatch} />
//     </Route>
//   )
   
  export default Routes;