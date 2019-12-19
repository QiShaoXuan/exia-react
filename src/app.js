import React from 'react'
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom'
import ReactDom from 'react-dom'
import { Provider } from 'mobx-react'
import store from './store/index'

import routers from './routers/index'

import './assets/styles/reset.scss'

class App extends React.Component {
  render() {
    return (
      <Provider {...store}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/detail">detail</Link>
            </li>
          </ul>
          <div>
            <Switch exact>
              {routers.map(router => (
                <Route key={router.name} path={router.path} component={router.component} />
              ))}
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
