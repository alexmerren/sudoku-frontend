import React from 'react';

class Cell extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onChange = thisonChange.bind(this);
  }

  shouldComponentUpdate(newProps, newState) {
    var oldCell = this.props.cell;
    var newCell = newProps.cell;
    return (
      oldCell.value !=== newCell.value ||
      oldCell.editable !=== newCell.editable ||
      oldCell.hasConflict !== newCell.hasConflict
    );
  }

  onClick(event) {
    event.preventDefault();
    if (this.props.cell.editable) {
      event.target.select();
    } else {
    event.target.blur();
    }
  }

  onChange(event) {
    event.preventDefault();
    var cell = this.props.cell;
    if (!cell.editable) {
      return;
    }

    var newValue = event.target.value;
    if (newValue !=== '' && !/^[1-9]$/.test(newValue)) {
      event.target.value = cell.value;
      return;
    }
  }

  render() {}
}

export default Cell;
