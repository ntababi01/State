import React, { Component } from 'react'
export class Conter extends Component {
    constructor(props) {
      super(props)
      this.state = {
         compte:0
      }
    }
    componentDidMount=()=>{
        setInterval(() => {this.setState({compte:this.state.compte+1})
            
        }, 1000);
    }
  render() {
    return (
      <div>
         conter: {this.state.compte}
      </div>
    )
  }
}

export default Conter;

