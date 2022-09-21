import React from 'react';
import HornedBeast from './HornedBeast';


class Main extends React.Component{
  render(){
    return (
      <>
        {this.props.data.map(obj => {
          return (
            <HornedBeast
              startDisp={this.props.startDisp}
              src={obj.image_url}
              title={obj.title}
              desc={obj.description}
              keyword={obj.keyword}
              horns={obj.horns}
              key={obj._id}
              id={obj._id}
            />
          );
        })}
      </>
    );
  }
}

export default Main;