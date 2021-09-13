import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [isSuccess, setIsSuccess] = useState(false)

  const testConnection = () => {
    axios.get('/api/ping').then(response => {
      if (response.data === 'pong') setIsSuccess(true)
    })
  }

  return (
    <>
      {isSuccess &&
        <div id='success' style={{ color: 'green', fontSize: 70 }}>Success</div>
      }
      {!isSuccess &&
        <button style={{ color: 'red', fontSize: 70 }} onClick={testConnection}>Test connection</button>
      }
    </>
  )
}

export default App