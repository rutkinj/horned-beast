//import
import React from 'react';
import './App.css';
import data from "./assets/data.json";
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import BeastDisp from './assets/Modal';
import HornsSelector from './assets/HornsSelector';
import { Container } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";

//extend
class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state={
      modalDisp: false,
      beastToDisp: {},
      beastsByHorns: data,
    }
  }
  
  stopDisp = () => this.setState({modalDisp: false});

  startDisp = (key) => {
    let selectedBeast = data.filter(beast => beast._id === key);
    this.setState({beastToDisp: selectedBeast[0]});
    this.setState({modalDisp: true});
  }

  selectByHorns = (horns) => {
    let retBeasts
    if (horns){
      retBeasts = data.filter(beast => beast.horns === Number(horns));
    } else {
      retBeasts = data;
    }

    this.setState({beastsByHorns: retBeasts});
  }

  render(){

    //inside of this return is all JSX
    // javascript that looks like html
    return (
      <Container>
        < Header />
        < HornsSelector ditdah={'hooray'} selectByHorns={this.selectByHorns}/>
        < Main data={this.state.beastsByHorns} startDisp={this.startDisp}/>
        < BeastDisp modalDisp={this.state.modalDisp} beastToDisp={this.state.beastToDisp} stopDisp={this.stopDisp}/>
        < Footer />
      </Container>
    );
  }


}

//export
export default App;
