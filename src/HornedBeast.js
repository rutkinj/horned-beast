import React from "react";
import Card from "react-bootstrap/Card";

class HornedBeast extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      desc: props.desc,
      clicked: 0,
    };
  }

  handleClick = () =>{
    this.setState({
      clicked: this.state.clicked + 1,
      desc: this.props.desc + "❤️: " + (this.state.clicked+1),
    });
  }

  render(){
    return (
      <>
        <Card style={{ width: "18rem" }} className="m-1 d-inline-block">
          <Card.Img
            variant="top"
            src={this.props.src}
            className="h-50"
            onClick={this.handleClick}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.state.desc}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;