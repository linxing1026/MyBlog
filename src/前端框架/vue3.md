# Vue3快速上手

## Vue3的新特性

  1. Compisition API(组合API)

     - setup配置 
     - ref reactive
     - watch watchEffect
     - provide inject
2. 新内置组件
     - Fragment
     - Teleport
     - Suspense  

## Vue3创建工程

  1. 通过vue-cli
  ```
  vue create project-name
  ```
  2. 通过vite
  ```
  npm init vue@latest
  ```

# 常用的Compisition API

## setup
1. vue3中一个新的配置项，值是一个函数

## ref
- 作用：定义一个响应式对象
- 语法： const x = ref(value);
  - 创建一个包含响应式对象的引用对象
  - JS中操作数据：x.value = xxx;
  - 模板中读取数据：不用.value,直接：<div>{{ x }}</div>
- 注：
  - 定义数据类型可以是基本类型，可以的对象
  - 基本类型响应式的实现依靠 Object.defineProperty()的 get set实现
  - 对象类型的数据调用了 reactive函数，本质是通过 Proxy

## reactive
- 作用：定义一个对象类型的响应式数据，基本类型不要使用reactive
- reactive定义的响应式数据是“深层次的”。
- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。

## setup的两个注意点

- setup执行的时机
  - 在beforeCreate之前执行一次，this是undefined。
  
- setup的参数
  - props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。
  - context：上下文对象
    - attrs: 值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性, 相当于 ```this.$attrs```。
    - slots: 收到的插槽内容, 相当于 ```this.$slots```。
    - emit: 分发自定义事件的函数, 相当于 ```this.$emit```。

## 计算与监视函数

### 1.计算属性
- 与vue2.x中配置一样

### 2.watch函数

- 与Vue2.x中watch配置功能一致

- 两个小“坑”：

  - 监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）。
  - 监视reactive定义的响应式数据中某个属性时：deep配置有效。
  
  ```js
  //情况一：监视ref定义的响应式数据
  watch(sum,(newValue,oldValue)=>{
  	console.log('sum变化了',newValue,oldValue)
  },{immediate:true})
  
  //情况二：监视多个ref定义的响应式数据
  watch([sum,msg],(newValue,oldValue)=>{
  	console.log('sum或msg变化了',newValue,oldValue)
  }) 
  
  /* 情况三：监视reactive定义的响应式数据
  			若watch监视的是reactive定义的响应式数据，则无法正确获得oldValue！！
  			若watch监视的是reactive定义的响应式数据，则强制开启了深度监视 
  */
  watch(person,(newValue,oldValue)=>{
  	console.log('person变化了',newValue,oldValue)
  },{immediate:true,deep:false}) //此处的deep配置不再奏效
  
  //情况四：监视reactive定义的响应式数据中的某个属性
  watch(()=>person.job,(newValue,oldValue)=>{
  	console.log('person的job变化了',newValue,oldValue)
  },{immediate:true,deep:true}) 
  
  //情况五：监视reactive定义的响应式数据中的某些属性
  watch([()=>person.job,()=>person.name],(newValue,oldValue)=>{
  	console.log('person的job变化了',newValue,oldValue)
  },{immediate:true,deep:true})
  
  //特殊情况
  watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person的job变化了',newValue,oldValue)
  },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效
  ```
  ### 3.watchEffect函数
  ```js
  //watchEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调。
  watchEffect(()=>{
      const x1 = sum.value
      const x2 = person.age
      console.log('watchEffect配置的回调执行了')
  })
