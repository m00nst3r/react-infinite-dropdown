import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
width: 100%;
height: 30px;
border-radius: 5px;
`;

class DropDownInput extends Component {
  render() {
    if (!this.props.open) {
      return (<div onClick={this.props.toggleOpen}>{this.props.selectedValue}</div>)
    }
    return (
      <div>
        <Input
          onChange={this.props.onChange} type="text"/>
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