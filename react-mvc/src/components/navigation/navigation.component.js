import React from 'react';
export default class Navigation extends React.Component {
   constructor (props) {
      super(props);
      this.state={
         navigation : this.props.navigation
      }
   }

   render () {
      return (<nav>{
         this.state.navigation.map((link,index) => <a key={index} onClick={() => this.props.renderLink(link.component) }>{link.text}</a>)
      }
      </nav>)
   }

}

