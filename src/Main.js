import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component{
  render(){
    return (
      <>
        <HornedBeast
          title={"Bill"}
          imageUrl={"https://www.fillmurray.com/460/300"}
          desc={"Bill Murray"}
        />
        <HornedBeast
          title={"Bill"}
          imageUrl={"https://www.fillmurray.com/460/300"}
          desc={"Bill Murray"}
        />
        <HornedBeast
          title={"Bill"}
          imageUrl={"https://www.fillmurray.com/460/300"}
          desc={"Bill Murray"}
        />
      </>
    );
  }
}

export default Main;