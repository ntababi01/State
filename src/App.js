import './App.css';
import React from 'react';
import Conter from './conter/Conter';
class App extends React.Component {
  state = { person:{
  fullName:'najeh',
  Bio:'info',
  imgSrc:"aaa.jpg",
  profession:'Informaticien'},test:true,cntr:0 } 
   toggle = () => {
     this.setState({test:!this.state.test})
     }
  render() { 
    return (
      <div>
        <button onClick={this.toggle}>
          {this.state.test?'hider':'show'}
          </button>
          {this.state.test?
        <div className='azerty'>
          <h1>fullName:{this.state.person.fullName}</h1>
          <h1>Bio:{this.state.person.Bio}</h1>
          <h1>profession:{this.state.person.profession}</h1>
          <img src={this.state.person.imgSrc} alt=""/>
        </div>:<Conter/>
        }
        </div>
    );
  }
}
 
export default App;
