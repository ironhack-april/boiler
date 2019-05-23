import React, { Component } from 'react';
import api from '../../api';
import axios from 'axios'
axios.defaults.withCredentials = true; 

export default class AddCountry extends Component {
  state = {
      name: "",
    }
  
  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    console.log(this.state)
    let hero = this.state; 
   
    axios.post('http://localhost:5000/api/saveHero', hero).then(stuffFromServer=>{
      console.log(stuffFromServer)
    })

  
  }
  render() {
    return (
      <div className="AddCountry">
        <h2>Add hero</h2>
        <form>
          Name: <input type="text" value={this.state.name} name="name" onChange={this.handleInputChange} /> <br />

          <button onClick={(e) => this.handleClick(e)}>Create country</button>
        </form>
        {this.state.message && <div className="info">
          {this.state.message}
        </div>}
      </div>
    );
  }
}