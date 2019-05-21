import React, { Component } from 'react'

const containerStyle = {
  boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.3)',
  width: '50%',
  margin: 'auto',
  height: '200px'
}
const styleMinutes = {
  borderBottom: '3px solid red',
  height: '50%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '4vh'
}
const styleHours = {
  borderBottom: '3px solid red',
  height: '50%',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '4vh'
}


export default class Time extends Component {
  state = {
    typingState: "",
    hourState: "",
    minuteState: ""
  }
  handleInput = (e) => {
    let value = document.getElementById('minutes').value
    let equation = Number(value) / Number(60)
    this.setState({ typingState: e.target.value , hourState:equation });
  }
  hoursToMinutes = (e) => {
    let value = e.target.value;
    let equation = Number(value) * 60
    this.setState({ hourState: value, minuteState: e.target.value  , typingState: equation});
    // let equation = Number(60) / Number(value);
    // this.setState({ typingState: e.target.value, hourState: equation  });
  }
  

  render() {
    
    return (
      <React.Fragment >
      <p style={{textAlign: 'center', padding:'20px', fontSize:'10vh', fontFamily: 'arial'}}>Time Conversion</p>

      <div id="container" style={containerStyle}>
        <div className="calculator" >
        <div className="minutes" style={styleMinutes}>
        <label for="minutes">Minutes</label>
        <input placeholder="minutes" id="minutes" onChange={this.handleInput} value={this.state.typingState}></input>
        </div>
        <div className="hours" style={styleHours}>
        <label for="Hours">Hours</label>
        <input placeholder="Hours" id="hours" value={this.state.hourState} onChange={this.hoursToMinutes}></input>
        </div>
        </div>
      </div>
      </React.Fragment>
    )
  }

}
