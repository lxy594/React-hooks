import { useCallback, useState } from 'react'
import ReactDOM from 'react-dom';
/*
1.与useMemo一样有缓存技术
不同的是useCallback缓存的是个函数.是个函数就可以执行
可以控制组件什么时候需要更新
2.useCallback()有两个参数,第一个参数是个函数,第二个参数是个数组
 useCallback(()=>{},[可以不写,写的话就是更新那个数])
 3.const callback=(()=>{},[]);callback是一个函数 可以直接callback()执行
  )
4.应用的场景:
需要缓存的函数，因为函数式组件每次任何一个state的变化整个组件 
都会被重新刷新,一些函数是没有必要被重新刷新的，此时就应该缓存起来，提高性能，和减少资源浪费。
*/
const InuseCallback = () => {
  let [count, setCount] = useState(0);
  let [num, setNum] = useState(0);

  let callback = useCallback(() => {
    console.log(count,'count');
    console.log(num,'num');
    return count;
  },[count])
  return (
    <>
      <h4>状态count:{count}</h4>
      <h4>num:{num}</h4>
      <h4>callback[count]:{callback()}</h4>
      <button onClick={() => {
        setCount(count + 1)
      }}>setCount</button>

      <button onClick={() => { setNum(num + 1) }}>setNum</button>
    </>
  )
}
ReactDOM.render(<InuseCallback />, document.getElementById("root"));