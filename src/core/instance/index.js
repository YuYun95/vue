import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 此处不用 class 的原因是方便后续给 Vue 实例混入实例成员
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {// 把Vue当作普通函数调用
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 调用 _init() 方法，初始化vue实例成员，触发 beforeCreate 和 created 生命钩子
  this._init(options)
}

// 注册 vm 的 _init() 方法，初始化 vm
initMixin(Vue)

// 注册 vm 的 $data/$props/$set/$delete/$watch
stateMixin(Vue)

// 初始化事件相关方法
// $on/$once/$off/$emit
eventsMixin(Vue)

// 初始化生命周期相关的混入方法
// _update/$forceUpdate/$destroy
lifecycleMixin(Vue)

// 混入 render
// $nextTick/_render
renderMixin(Vue)

export default Vue
