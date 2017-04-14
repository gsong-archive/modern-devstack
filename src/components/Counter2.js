import React from 'react'

import Counter from './Counter'


export default class Counter2 extends Counter {
  render() {
    const {counter} = this.state

    return (
      <div>
        <h2>HMR <code>Counter2</code></h2>
        <div>{counter}</div>
      </div>
    )
  }
}
