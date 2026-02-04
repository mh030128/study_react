import './App.css';
import { useState, useEffect, useRef } from 'react';
import Viewer from './component/Viewer';
import Controller from './component/Controller';
import Even from './component/Even';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const didMountRef = useRef(false);

  const handleSetCount = (value) => {
    setCount(count + value)
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  // useEffect(() => {
  //   if(!didMountRef.current) {
  //     didMountRef.current = true;
  //     return;
  //   } else {
  //     console.log("component update!");
  //   }
  // });

  // useEffect(() => {
  //   console.log("component mount");
  // }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     console.log("click");
  //   }, 1000);
  //   return () => {
  //     console.log("clean-up");
  //     clearInterval(intervalId);
  //   };
  // });



  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  ); 
}

export default App;

/*
카운트 기능을 구현하려면 State를 App 컴포넌트에서 만들어야 한다.
그 이유는 State 값은 Viewer 컴포넌트,
set 함수는 Controller 컴포넌트에 전달해야 하기 때문이다.

State 값이나 set 함수를 여러 컴포넌트에서 사용하는 경우, 이들을 상위 컴포넌트에서 관리해야 한다.
리액트에서는 이 기능을 다른말로 State 끌어올리기(State Lifting)이라고 한다.
*/
