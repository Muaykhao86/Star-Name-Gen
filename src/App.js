import React, { Component } from 'react';
import logo from './media/logo.png';
import storm from './media/storm.png';
import ForceScanner from './ForceScanner';
import './App.css';
import 'tachyons';



class App extends Component {
  constructor(){
  super()
    this.state={
      result:""
    }
  }
  onButtonPush = (event) =>{
    const genNum = Math.floor(Math.random() * 30);
    const url = `https://swapi.co/api/people/${genNum}/`;
      return(
        fetch(url)
        .then(response =>response.json())
        .then(char=>this.setState({result:char.name})));
  }

  render() {
  
    return (
    <div >
      <div>
          <header className="tc">
          <img src={logo} className="w4 pt4" alt="logo" />
          <h1 className="yellow">Use the Force Scanner to see which STARWARS character you are!</h1>
          </header>
      </div>   
      <div className="flex justify-between items-center pt4 "> 
          <div id ='main' className="order-1 w-50">
            <ForceScanner CharGen={this.state.result} PushMe={this.onButtonPush}/>
          </div>
          <div className="order-0 w-20 ph3">
            <img id='storm1'src={storm} className="h-70" alt="storm1" />      
          </div>
          <div className="order-2 w-20 ph3">
            <img id='storm2'src={storm} className="h-70" alt="storm2" />
          </div>
      </div>
    </div>
    );
  }
}

export default App;
