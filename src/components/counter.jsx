import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onIncrement, onDecrement, onDelete, counter } = this.props;
    return (
      <React.Fragment>
        <span className={this.getClassName()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          --
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  getClassName() {
    let classLabels = "badge m-2 badge-";
    classLabels += this.props.counter.value === 0 ? "warning" : "primary";
    return classLabels;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
