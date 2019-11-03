import React from 'react';
import { connect } from 'react-redux';

class MiniCart extends React.Component {
   render () {
      return (<div className="miniCart">
         <h4>Mini Cart</h4>
         <ul >
            {
               this.props.post.map((item, index) =>
                  <li key={index}> {item.name} -> {item.price} <button type="button" className="btn btn-sm btn-default text-white float-right">x</button> </li>
               )
            }
         </ul>
      </div>
      )
   }
}
const data = (state) => {
   console.log("connect: ", state);
   return {
      post: state
   }
}


export default connect(data)(MiniCart)