import React from 'react';
import { connect } from 'react-redux';

class MiniCart extends React.Component {

  
   render () {
      console.log(this.props.items)
      return (<div className="miniCart">
         <h4>Mini Cart</h4>
         <ul >
            {
               this.props.items.map((item, index) =>
                  <li key={index}> {item.name} -> {item.price} <button type="button" onClick={()=> this.props.removeItem(item.id)} className="btn btn-sm btn-default text-white float-right">x</button> </li>
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
      items: state
   }
}


export default connect(data)(MiniCart)