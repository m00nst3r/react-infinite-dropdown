import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List from 'react-virtualized/dist/es/List';
import DropDownItem from "./DropDownItem";

class DropDownList extends Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
    this.rowRenderer = this.rowRenderer.bind(this);
  }

  click(item ) {
    this.props.onSelect(item);
  };

  rowRenderer({key, index, isScrolling, isVisible, style}){
    const rowStyle = {
      fontSize: 16,
      textAlign: 'left',
      ...style
    };
    return(
      <DropDownItem
        style={rowStyle}
        key={key}
        onItemClick={this.click}
        customKey={key}
        item={this.props.list[index]}/>
    )
  };

  render() {
    if (!this.props.open){
      return null;
    }
    return (
      <div>
        <div>
          <List
            height={300}
            width={this.props.width || 300}
            rowHeight={20}
            rowCount={this.props.list.length}
            rowRenderer={this.rowRenderer}/>
        </div>
      </div>
    );
  }
}

DropDownList.propTypes ={
  list: PropTypes.array,
  open: PropTypes.bool,
  width: PropTypes.number,
  onSelect: PropTypes.func
};

export default DropDownList;