import { action, observable } from 'mobx'

export default class EvenInfoStore {

  @observable evenInfo: any = {}



  @action.bound
  public saveUserInfo(payload: any) {
    this.evenInfo = Object.assign(this.evenInfo, payload)
  }
}