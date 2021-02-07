import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
// 采用ui组件先npm install ..... 组件按需导入
import { Button, Divider, Typography } from '@material-ui/core';
const Ineffect = () => {
  const [count, setCount] = useState(0)

  /*useEffect
  1.componentDidMount,componentDidUpdate 和 componentWillUnmount的组合。
  2.可以获取props和state,采用闭包的形式.
  3.无阻塞更新
  4.useEffect((回调函数,数组(可以不写,不写是所有的状态 )))
  4.1给空数组就不会执行return里面的东西 给数组里面加count就是监听这个数 
  5.可以多个useEffect()
   */
  useEffect(() => {
    console.log(count);
    return ()=>{
      // 会执行这个方法
      //console.log('willunmount');
      // 给空数组不会执行这个alert
      alert('你是猪')
    }
  },[])
  return (
    <>
      <h1>useEffect</h1>
      <Divider />
      <Typography variant="h3" component="p">
        {count}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => (setCount(count + 1))}>
        number++
</Button>
    </>
  )

}

ReactDOM.render(<Ineffect />, document.getElementById('root'));

