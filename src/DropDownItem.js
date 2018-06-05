import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Item = styled.div`
:hover {
    background-color: #2baee9;
    font-size: 16px;
}
`;

class DropDownItem extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }
  click(){
    this.props.onItemClick(this.props.item);
  }

  render() {
    return (
      <Item key={this.props.customKey} style={this.props.style} onClick={this.click}>
        {this.props.item}
      </Item>
    );
  }
}

DropDownItem.propTypes = {
  item: PropTypes.string,
  customKey: PropTypes.any,
  style: PropTypes.object,
  onItemClick: PropTypes.func
};

export default DropDownItem;