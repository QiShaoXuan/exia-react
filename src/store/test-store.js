import { observable, action } from 'mobx'

class TestStore {
  @observable name = 'this is test store'

  @action setName(name) {
    this.name = name
  }
}

export default new TestStore()
