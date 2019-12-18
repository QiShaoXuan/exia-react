import React from 'react'
import {
  Route,
  BrowserRouter,
  Link,
  Switch
} from "react-router-dom"
import ReactDom from 'react-dom'
import HomeIndex from "./pages/home"
import BlogIndex from "./pages/detail"

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <ul>
            <li><Link to="/home">home</Link></li>
            <li><Link to="/detail">detail</Link></li>
          </ul>
          <div>
            {/* Switch只显示一个组件。加exact表示精确匹配/。如果不加exact，/xxx也会匹配/。  */}
            <Switch>
              {/* exact */}
              <Route path="/home" component={HomeIndex}/>
              <Route exact path="/detail"
                component={BlogIndex}/>
            </Switch>
          </div>
        </BrowserRouter>
      </>
    )
  }
}

ReactDom.render(<App/>, document.getElementById("app"))
