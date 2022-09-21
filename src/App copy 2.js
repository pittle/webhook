import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, asyncIncrement } from './store/features/counterSlice';
import { loadData } from './store/features/movieSlice';

function App() {
  const { count } = useSelector((state) => state.counter);
  const { list } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  // console.log(list, '1321');
  // useEffect(() => {
  //   dispatch(loadData()); // 获取影片数据
  // }, []);
  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(increment({ step: 2 }));
        }}
      >
        {count}
      </button>
      <hr />
      <button
        onClick={() => {
          dispatch(asyncIncrement({ step: 1 }));
        }}
      >
        {count}
      </button>
      <hr />
      <ul>
        {list.map((item) => (
          <li key={item.tvId}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


// import React, { Component } from 'react';
// import { useAllStudents } from './myHooks/useAllStudents'; 
// function Test(){
//       const stus = useAllStudents();
//       console.log(stus)
//       // const list = stus.map(it => <li key={it.id}>{it.name}</li>);
//       // return <ul>
//       //   {list}
//       // </ul>
//       return <div>123</div>
// }
// class App extends Component {
//   render() {
//     return (
//       <div>
//           <Test></Test>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from 'react';
// import { usePageStudents } from './myHooks/usePageStudents'; 
// function Test(){
//       const stus = usePageStudents(1,10);
//       console.log(stus)
//       // const list = stus.map(it => <li key={it.id}>{it.name}</li>);
//       // return <ul>
//       //   {list}
//       // </ul>
//       return <div>123</div>
// }
// class App extends Component {
//   render() {
//     return (
//       <div>
//           <Test></Test>
//       </div>
//     );
//   }
// }
// export default App;


// import React, { useState, useLayoutEffect, useRef ,useEffect} from 'react';
// export default function App() {
//   const [n, setN] = useState(0);
//   const h1Ref = useRef();
//   // useLayoutEffect(() => {
//   //   //无闪烁
//   //   //调用时间相当于类组件的componentDidMount&componentDidUpdate
//   //   h1Ref.current.innerText = Math.random().toFixed(2);
//   // });
//   useEffect(() => { //有闪烁
//     h1Ref.current.innerText = Math.random().toFixed(2);
//   })
//   return (
//     <div>
//       <h1 ref={h1Ref}>{n}</h1>
//       <button
//         onClick={() => {
//           setN(n + 1);
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// }





// import { useEffect, useState ,useLayoutEffect} from 'react';

// const Example = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("哈哈哈，useEffect 又执行了");
//     return () => {
//       //每次执行useEffect函数时执行 这个清理函数  当前函数卸载时也会执行一次这个函数
//       console.log("看到我就知道执行了清除机制(～￣▽￣)～");
//     };
//   }, [count]);

//   useLayoutEffect(() => {
//     // useLayoutEffect 在useEffect之前运行  
//     console.log("I love you");
//   })

//   return (
//     <div>
//       <p>那啥，你点了我 {count} 次 </p>
//       {console.log("这是 dom 节点渲染了，小样╭(╯^╰)╮")}
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         你觉得你点击我之后会发生什么⛏️⛏️⛏️
//       </button>
//     </div>
//   );
// };

// function App() {
//   const [visible,setVisible] = useState(true);
//   const handleClick = () => {
//     setVisible(false);
//   }
//   return (
//     <div className="App">
//       {visible ? <Example /> : null}
//       <button onClick={handleClick}>点击按钮</button>
//     </div>
//   );
// }

// export default App;




// import React, { useEffect, useState ,useRef, createContext, useContext} from 'react';

// const Context = createContext({moneyForDaddy: 0,moneyForMe: 0});
// function App(props) {
//     const [moneyForMe] = useState(100);
//     const [moneyForDaddy] = useState(101);
//     return <Context.Provider value={{moneyForDaddy,moneyForMe}}>
//       <Daddy>
//         <Me />
//       </Daddy>
//     </Context.Provider>
// }

// function Daddy(props){
//   const ctx = useContext(Context);
//   return (<div className="Daddy"><h2>This is Daddy, received ${ctx.moneyForDaddy}</h2>      {props.children}</div>  );
// }

// function Me(){
//   const ctx = useContext(Context);
//   return <div className="son"><h1>This is Me, received ${ctx.moneyForMe}</h1></div>
// }

// export default App;



// import React, { Suspense } from 'react'
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import { Spin } from 'antd'
// import Page1 from "./Page1"
// import Page2 from "./Page2"
// function App() {
//     return <Router>
//     <Suspense fallback={<Spin />}>
//       <Switch>
//         <Route path="/page1" exact component={props => <Page1 {...props} />} />
//         {/* <Route path="/login" component={props => <div>123</div>}/> */}
//         {/* <Route path="/ab" render={props => <div>123</div>}/> */}
//         <Route path="/page2" component={props => <Page2 {...props} />} />

//         <Redirect to="/page1" from="/"/>
//       </Switch>
//     </Suspense>
//   </Router>
// }

// export default App;



