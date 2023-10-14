import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { generateObj } from "../../utils/global.utils";
import { Actions } from "../../constants/actions.constants";
import useCounter from "../../hooks/useCounter";

export default function Counter() {
  const { numberInput, countState, dispatch, handleInputChange } = useCounter();

  const buttons = [
    generateObj("Dec", Actions.DECREMENT),
    generateObj("Inc", Actions.INCREMENT),
    generateObj("Inc Randon", Actions.INCREMENT_RANDOM),
    generateObj("Inc Nearest Odd", Actions.INCREMENT_NEAREST_ODD),
    generateObj("Dec By Value", Actions.DECREMENT_BY_VALUE, numberInput),
    generateObj("Reset", Actions.RESET)
  ];
  return (
    <>
      <p style={{ marginBottom: 0 }}>Count: {countState.count}</p>
      <TextField
        defaultValue={numberInput}
        type="number"
        onChange={handleInputChange}
        style={{ display: "block" }}
      />
      {buttons.map((btn) => (
        <Button
          key={btn.type}
          variant="contained"
          onClick={() => dispatch({ type: btn.type, payload: btn.payload })}
          style={{ margin: "4px" }}
        >
          {btn.text}
        </Button>
      ))}
    </>
  );
}
