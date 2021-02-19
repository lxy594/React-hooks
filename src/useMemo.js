import { useMemo, useState } from 'react'
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

/*
使用的场景: 需要计算的状态
1.useMemo 是用memoization来提高性能的
2.Memoization是JavaScript的一种缓存机制
如果有CPU密集型的操作 可以通过将初始操作的结果存储到缓存中优化使用,
如果操作会再次执行我们不用麻烦cpu因为相同的结果存储到某个地方只是简单的返回结果
3.它是以空间换速度
4.useMemo是一个函数 有两个参数 第一个是函数 第二个参数是数组
5.useMemo(()=>{},[默认可以不写])
6.useMemo和useEffect的执行时间不同,useEffect是在componentDidMount以后执行的
而useMemo是在组件渲染过程中执行的.
*/

// 创建子组件
const InuseMemo = () => {
  let [count, setCount] = useState(0);
  let [num, setNum] = useState(0);

  let res = useMemo(() => {
    return { count, num };
  }, [count]);
  // 缓存效果 当我这里点count的时候页面会每次会更新显示出来数字,而num有缓存当我点count的时候会显示我之前点过几次的数字同时count的数字+1

  return (
    <>
      <p>组件的状态=count{res.count}======{res.num}</p>
      <Button variant="contained" onClick={() => {
        setCount(count + 1);
        console.log(count);
      }}
      >useMemo</Button>

      <Button variant="contained" onClick={() => {
        setNum(num + 1);
        console.log(num,'num');
      }}
      >useMemo</Button>
    </>
  )
}
ReactDOM.render(<InuseMemo />, document.getElementById("root"));