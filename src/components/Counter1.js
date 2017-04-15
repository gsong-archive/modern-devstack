import React from "react";

import Counter from "./Counter";

import styles from "./Counter.css";

export default class Counter1 extends Counter {
  tick() {
    const increment = 2;
    this.setState(({ counter }) => ({ counter: counter + increment }));
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h2>HMR <code>Counter1</code></h2>
        <div className={styles.counter}>{counter}</div>
      </div>
    );
  }
}
