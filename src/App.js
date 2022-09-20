//import
import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

//extend
class App extends React.Component {
  render(){

    //inside of this return is all JSX
    // javascript that looks like html
    return (
      <>
        < Header />
        < Main />
        < Footer />
      </>
    );
  }
}

//export
export default App;
