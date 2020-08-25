import { enableLogging } from 'mobx-logger'
import { configure } from 'mobx'
import  EvenInfoStore from './event-info-store/event-info-store'

configure({
  enforceActions: 'observed'
})


// 记录日志
enableLogging({
  action: true,
  reaction: true,
  compute: true,
  predicate: () => true,
  transaction: true
})

class StoreConfig {
  evenInfoStore = new EvenInfoStore()
}

const store = new StoreConfig()


export default store