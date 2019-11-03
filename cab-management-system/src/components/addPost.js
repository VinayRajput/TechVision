import React from 'react';
import {connect} from 'react-redux';

 class AddPost extends React.Component {


   addThisPost = () =>{
      let storeData = {
         title:this.refs.title.value,
         name: this.refs.name.value
      }
      console.log(storeData);

      this.props.dispatch({type:'ADD', storeData});
      this.refs.title.value=''
      this.refs.name.value =''
      
   }
   render () {
      return (<div>
         <form>
            <input type="text" ref="title" />
            <input type="text" ref="name"  />
            <button type="button" onClick={this.addThisPost}>Submit</button>
         </form>
      </div>)
   }
}

export default connect()(AddPost);
