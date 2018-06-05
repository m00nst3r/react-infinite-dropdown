import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DropDownInput extends Component {
  render() {
    if (!this.props.open) {
      return (<div onClick={this.props.toggleOpen}>{this.props.selectedValue}</div>)
    }
    return (
      <div>
        <input onChange={this.props.onChange} type="text"/>
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