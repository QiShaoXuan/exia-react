import React from 'react'
import Loadable from 'react-loadable'
import Loading from './loading'

const LoadableComponent = component =>
  Loadable({
    loader: component,
    loading: props => <Loading {...props} />,
    delay: 200,
  })

export default LoadableComponent
