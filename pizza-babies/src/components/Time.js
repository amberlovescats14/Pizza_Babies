import React, { Component } from 'react'
const containerStyle = {
  color: 'white',
  background: 'red',
  width: '50%',
  margin: 'auto',
  fontSize: '5vh'
}


export default class Time extends Component {
  state = {
    typingState: "",
    resultState: ""
  }
  handleInput = (e) => {
    let value = document.getElementById('minutes').value
    let equation = Number(value) / Number(60)
    this.setState({ typingState: e.target.value , resultState:equation });
  }
  

  render() {
    
    return (
      <div id="container" style={containerStyle}>
        <div className="calculator" >
        <label for="minutes">Minutes</label>
        <input placeholder="minutes" id="minutes" onChange={this.handleInput} value={this.state.typingState}></input>
        <p id="hours">Hours</p>
        <input placeholder="Hours" id="hours" value={this.state.resultState} ></input>
        </div>
      </div>
    )
  }

}



