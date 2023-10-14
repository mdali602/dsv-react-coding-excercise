
import "./styles.css";
// import { useReducer, useState } from "react";

// import Counter from "./components/counter/Counter";
import SearchBox from "./components/search/SearchBox";
import Users from "./components/user/Users";
// import Todos from "./components/todos/Todos";
// import useUserOps from "./hooks/useUserOps";

/* function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
} */

export default function App() {
  // const [numberInput] = useState(0);
  // const [text] = useState("");
  // const [countState, dispatch] = useReducer(reducer, { count: 0 });
  // const {
  //   // users,
  //   searchedUsers,
  //   // handleRemove,
  //   handleSearch,
  //   handleRestore
  // } = useUserOps();

  return (
    <div className="App">
      {/* <Counter
        numberInput={numberInput}
        countState={countState}
        dispatch={dispatch}
      /> */}

      <SearchBox />

      <Users />
      {/* <Todos /> */}
    </div>
  );
}
