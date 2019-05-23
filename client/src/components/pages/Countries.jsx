import React, { Component } from 'react';
import api from '../../api';
import axios from 'axios'

export default class Countries extends Component {
  state = {
      countries: []
  }

  showCountries = () => {
    return this.state.countries.map((c,i) => { 
      return <li key={c._id}>
        {c.name} experiment!!1
        <button onClick={() => this.removeCountry(i)}>Remove</button>
      </li>
      }
    )
  }

  removeCountry = (j) =>{ 
    //Axios.delete.then ....
    let newCountries = [...this.state.countries]
    newCountries.splice(j,1)
    this.setState({
      countries:newCountries
    })
  }



  render() {
    return (
      <div className="Countries">
        <h2>List of countries</h2>
        {this.showCountries()}
      </div>
    );
  }
  componentDidMount() {
    api.getCountries()
    //axios.get(`http://localhost:5000/api/countries`) same thing just need do .data 
      .then(countries => {
        console.log(countries)
        this.setState({
          countries: countries //countries.data
        })
      })
      .catch(err => console.log(err))

      api.getDoggy()
      .then(doggy=>{
        console.log(doggy)
      })

    
  }
}