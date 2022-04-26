import React, { Component } from 'react'

export class Child extends Component {
    constructor(props){
        super(props)
        this.state={
            age:"24"
        }
    }
     changeAge(){
        this.setState({
            age:"25"
        })
    }
  render() {
    return (
      <div>
          <h2>{this.props.name}<br/>{this.state.age}</h2>
          <button onClick={()=>this.changeAge()}>Full Name and Age</button>
      </div>
    )
  }
}

export default Child
