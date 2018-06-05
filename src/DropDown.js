import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './DropDownStyles.css'
import DropDownInput from './DropDownInput'
import DropDownList from './DropDownList'

class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      open: false,
      value: ""
    }
  }

  onSearch(event){
    const list = this.props.list.filter(item => item.includes(event.target.value));
    this.setState({list})
  };

  toggleOpen() {
    this.setState({
      open: !this.state.open
    })
  };

  selectItem(item) {
    this.setState({
      value: item
    });
    this.toggleOpen();
  };

  componentDidMount() {
    this.setState({
      list: this.props.list
    })
  }

  render() {
    return (
      <div className="custom-drop-down">
        <DropDownInput
          selectedValue={this.state.value}
          open={this.state.open}
          toggleOpen={this.toggleOpen}
          onChange={this.onSearch}/>
        <span onClick={this.toggleOpen}/>
        <div className="drop-list">
          <DropDownList
            onSelect={this.selectItem}
            open={this.state.open}
            width={200}
            list={this.state.list}/>
        </div>
      </div>
  )
    ;
  }
}

DropDown.propTypes = {
  list: PropTypes.array
};

export default DropDown;