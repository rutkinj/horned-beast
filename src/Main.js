import React from 'react';
import HornedBeast from './HornedBeast';
import data from "./assets/data.json";

class Main extends React.Component{
  render(){
    return (
      <>
        {data.map(obj => {
          return <HornedBeast
          src ={obj.image_url}    title ={obj.title}
          desc ={obj.description} keyword ={obj.keyword}
          horns ={obj.horns}      key ={obj._id}
          />
        })}
      </>
    );
  }
}

export default Main;