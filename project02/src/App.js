import './App.css';
import React, { useMemo, useCallback, useReducer, useRef } from 'react';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import Todolist from './component/TodoList';

// import TestComp from './component/TestComp';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래널기",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? {...it, isDone: !it.isDone,} : it);
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  }, []);

  // const [todo, setTodo] = useState(mockTodo);

  // const onCreate = (content) => {
  //   const newItem = {
  //     id: idRef.current,
  //     content,
  //     isDone: false,
  //     createDate: new Date().getTime(),
  //   };
  //   setTodo([newItem, ... todo]);
  //   idRef.current += 1;
  // };

  // const onUpdate = (targetId) => {
  //   setTodo (
  //     todo.map((it) => 
  //       // {
  //       //   if (it.id === targetId) {
  //       //     return {
  //       //       ...it,
  //       //       isDone: !it.isDone,
  //       //     };
  //       //   } else {
  //       //     return it;
  //       //   }
  //       // }
  //       it.id === targetId ? { ...it, isDone: !it.isDone } : it
  //     )
  //   );
  // };

  // const onDelete = (targetId) => {
  //   setTodo(todo.filter((it) => it.id !== targetId));
  // };

  const memoizedDispatches = useMemo(() => {
    return { onCreate, onUpdate, onDelete };
  }, []);

  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider value={memoizedDispatches}>
          <TodoEditor />
          <Todolist />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
