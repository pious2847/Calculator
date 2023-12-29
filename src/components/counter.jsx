import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
    count1: 0,
    count2: 0,
  };

  render() {
    return (
      <React.Fragment>
        <h4>The total Count {this.getCounterSum()} </h4>
        <br />
        <span className={this.getClassesBadge("count")}>
          {this.formateCount("count")}
        </span>
        <button
          onClick={() => this.incrementHandler("count")}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.decrementHandler("count")}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        <br />
        <span className={this.getClassesBadge("count1")}>
          {this.formateCount("count1")}
        </span>
        <button
          onClick={() => this.incrementHandler("count1")}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.decrementHandler("count1")}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
        <br />
        <span className={this.getClassesBadge("count2")}>
          {this.formateCount("count2")}
        </span>
        <button
          onClick={() => this.incrementHandler("count2")}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => this.decrementHandler("count2")}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
      </React.Fragment>
    );
  }

  incrementHandler = (counter) => {
    this.setState((prevState) => ({
      [counter]: prevState[counter] + 1,
    }));
  };

  decrementHandler = (counter) => {
    this.setState((prevState) => ({
      [counter]: prevState[counter] - 1,
    }));
  };

  getClassesBadge(counter) {
    let classes = "badge m-2 badge-";
    classes += this.state[counter] === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount(counter) {
    const count = this.state[counter];
    return count === 0 ? "zero" : count;
  }

  getCounterSum = () => {
    const { count, count1, count2 } = this.state;
    let total = count + count1 + count2;
    console.log(total);
    return total;
  };
}
