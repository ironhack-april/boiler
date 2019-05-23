import React, { Component } from 'react';
import axios from 'axios'
import api from '../../api'
class ShowHeroes extends Component {
  state={
    heroes:[]
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/hero').then(heroesFromServer=>{

      console.log('heroesFromServer',heroesFromServer)

      this.setState({heroes:heroesFromServer.data})
    }).catch(err=>console.log(err))
  }

  deleteHero = (id, i) => {
    console.log(id)//The id in the database
    //Hero.deleteById(id) 
    axios.post('http://localhost:5000/api/hero/deleteHeroPlease', {id:id}).then(responseFromServer=>{
      console.log(responseFromServer)
      let heroes = [...this.state.heroes]
      heroes.splice(i,1)
      this.setState({heroes})
    })

    // api.getDog().then(results=>{ //functions inside api.js 
    //   console.log(results)
    // })
  }

  showTheHeroes = () => {
    return this.state.heroes.map((eachHero, i)=>{
      return <li>{eachHero.name}<button onClick={()=>this.deleteHero(eachHero._id, i)}>Delete</button></li>
    })
  }

  render() {
    return (
      <div>
          show heroes???  

          {this.showTheHeroes()}  

      </div>
    );
  }
}

export default ShowHeroes;