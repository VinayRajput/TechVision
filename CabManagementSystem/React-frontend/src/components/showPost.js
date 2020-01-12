import React from 'react';
import {connect} from 'react-redux';

 class ShowPost extends React.Component{
   render(){
      return(<div>
         Show post
                  {/* <div>Title: {this.props.post.title}</div>
                  <div>Name: {name}</div> */}
                  {
                     console.log(this.props.post)
                  }
         </div>)
   }
}
const data = (state) => {
   return {
      post:state
   }
}
export default connect(data)(ShowPost);