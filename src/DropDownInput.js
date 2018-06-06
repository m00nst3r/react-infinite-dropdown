import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
width: 100%;
height: 30px;
border-radius: 5px;
`;

const Div = styled.div`
width: 99%;
height: 100%;
display: block;

label {
  line-height: 35px;
}
`;

class DropDownInput extends Component {
  render() {
    if (!this.props.open) {
      return (<Div onClick={this.props.toggleOpen}><label>{this.props.selectedValue}</label></Div>)
    }
    return (
      <div>
        <Input placeholder="search" onChange={this.props.onChange} type="text"/>
      </div>
    );
  }
}

DropDownInput.propTypes = {
  onChange: PropTypes.func,
  open: PropTypes.bool,
  toggleOpen: PropTypes.func,
  selectedValue: PropTypes.string
};

export default DropDownInput;