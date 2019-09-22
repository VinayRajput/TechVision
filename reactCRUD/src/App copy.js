import React from 'react';
import Product from './components/Products.js';

class  App extends React.Component {
  constructor(){
    super();

    this.state = {
      candidates:[]
    }
  }

  addCandidate = ()=>{
    var candidates = this.state.candidates
    candidates.push({name:this.refs.name.value, lastname:this.refs.lastname.value});
    console.log(candidates);
    this.setState(candidates)

  }
  render(){
    return (
      <div>
      <h1>Hello World</h1>
      <form id="addCandidate" >
        <label>Name: </label>
        <input type="text" ref="name"  /> <br/>
        <label>Lastname: </label>
        <input type="text" ref="lastname" />
        <br/>
        <input type="button" value="Add Candidate" onClick={this.addCandidate} />
      </form>
    {this.state.candidates.map(candidate => <h1>{candidate.name} {candidate.lastname}</h1>)}
      </div>
    )
  }

}
export default App;