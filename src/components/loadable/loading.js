import React from 'react'

const Loading = props => {
  const { error, timedOut, pastDelay } = props
  {
    if (error) {
      return (
        <div>
          Error! <button onClick={props.retry}>Retry</button>
        </div>
      )
    } else if (timedOut) {
      return (
        <div>
          Taking a long time... <button onClick={props.retry}>Retry</button>
        </div>
      )
    } else if (pastDelay) {
      return <div>Loading...</div>
    } else {
      return null
    }
  }
}

export default Loading
