//import
import React from 'react';
import './App.css';
import data from "./assets/data.json";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import BeastDisp from './assets/Modal';

import "bootstrap/dist/css/bootstrap.min.css";

//extend
class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      modalDisp: false,
      beastToDisp: {},
    }
  }
  
  stopDisp = () => this.setState({modalDisp: false});

  startDisp = (key) => {
    let selectedBeast = data.filter(beast => beast._id === key);
    this.setState({beastToDisp: selectedBeast[0]});
    console.log(this.state.beastToDisp);
    this.setState({modalDisp: true});
  }

  render(){

    //inside of this return is all JSX
    // javascript that looks like html
    return (
      <>
        < Header />
        < Main data={data} startDisp={this.startDisp}/>
        < BeastDisp modalDisp={this.state.modalDisp} beastToDisp={this.state.beastToDisp} stopDisp={this.stopDisp}/>
        < Footer />
      </>
    );
  }


}

//export
export default App;
