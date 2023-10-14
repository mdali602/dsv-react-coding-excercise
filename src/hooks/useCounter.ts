import { useReducer, useState } from "react";
import { Action } from "../types/global.types";
import { Actions } from "../constants/actions.constants";

type State = {
  count: number;
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case Actions.INCREMENT:
      return { count: state.count + 1 };
    case Actions.DECREMENT:
      return { count: state.count > 0 ? state.count - 1 : 0 };
    case Actions.INCREMENT_RANDOM:
      return { count: state.count + Math.ceil(Math.random() * 10) };
    case Actions.INCREMENT_NEAREST_ODD:
      return {
        count: state.count % 2 === 0 ? state.count + 1 : state.count + 2
      };
    case Actions.DECREMENT_BY_VALUE:
      return {
        count: action.payload && action.payload <= state.count ? state.count - action.payload : 0
      };
    case Actions.RESET:
      return { count: 0 };
    default:
      throw new Error();
  }
}

export default function useCounter() {
  const [numberInput, setNumberInput] = useState(0);
  const [countState, dispatch] = useReducer(reducer, { count: 0 });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setNumberInput(parseInt(value));
  }

  return {
    numberInput,
    countState,
    dispatch,
    handleInputChange
  };
}
