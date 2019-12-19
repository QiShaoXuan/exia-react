import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('TestStore')
@observer
export default class HomeIndex extends React.Component {
  state = {
    num: 0,
  }
  handleClick = () => {
    const { TestStore } = this.props
    const { num } = this.state
    this.setState(
      {
        num: num + 1,
      },
      () => {
        TestStore.setName(`click ${this.state.num}`)
      }
    )
  }

  render() {
    const {
      TestStore: { name },
    } = this.props

    return (
      <div>
        <p>HomeIndex</p>
        <section>
          <button onClick={this.handleClick}>click to change test store name</button>
          <p>{name}</p>
        </section>
      </div>
    )
  }
}
