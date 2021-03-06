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
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  onSearch(event){
    this.props.onSearch(event.target.value);
  };

  toggleOpen() {
    this.setState({
      open: !this.state.open
    })
  };

  selectItem(item) {
    this.props.onClick(item);
    this.toggleOpen();
  };

  componentDidMount() {
    this.setState({
      list: this.props.list
    })
  }

  render() {
    if (this.props.list && this.props.list.length === 0) return (<div className="custom-drop-down disabled"><span/></div>);
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
  list: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onSearch: PropTypes.func
};

DropDown.defaultProps = {
  list: []
};

export default DropDown;