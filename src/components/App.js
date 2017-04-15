import React from 'react'

import Counter1 from './Counter1'
import Counter2 from './Counter2'

import styles from './App.css'

const App = () => {

  return (
    <div className={styles.app}>
      <h1>Hello from the App Container 💪</h1>
      <p>Showing off Webpack Hot Module Replacement (“HMR”)</p>
      <Counter1 />
      <Counter2 />
    </div>
  )
}

export default App
