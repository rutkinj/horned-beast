import React from "react";
import Form from "react-bootstrap/Form";

class HornsSelector extends React.Component{
  
  handleChange = (e) => {
    e.preventDefault();
    this.props.selectByHorns(e.target.value);
  }
  
  render(){
    return (
      <>
        <Form.Group className="mb-3">
          <Form.Label>Number of Horns:</Form.Label>
          <Form.Select onChange={this.handleChange}>
            <option value="">Horns</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">Lots!</option>
          </Form.Select>
        </Form.Group>
      </>
    );
  }
};

export default HornsSelector;