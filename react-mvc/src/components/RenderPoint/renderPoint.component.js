import React from 'react';

export default class RenderPoint extends React.Component {
   constructor (props) {
      super(props)
      this.state = {
         DriversList: this.props.renderPoint
      }
   }

   render () {
      return (<div>
         {
            this.props.renderPoint.map((driver, i) => {
               return <div key={i}>{driver.name}</div>
            })
         }

      </div>)
   }
}