import React from 'react';
import AddPost from './addPost';
import ShowPost from './showPost';

class Dashboard extends React.Component {
   constructor () {
      super();
      this.state = {};
   }

   render () {
      return (<div>This is Dashboard 
         <hr/>
         <AddPost/>
         <ShowPost/> 
        </div>);
   }
}
export default Dashboard;