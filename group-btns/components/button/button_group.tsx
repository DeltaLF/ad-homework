import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch, useSelector } from "@/store/store";
import {
  countAddOne,
  countStateToggle,
  countClear,
} from "@/store/slices/countSlice";

function ButtonGroupComp() {
  const dispatch = useDispatch();
  const { count, isDisabled } = useSelector((state) => state.count);

  return (
    <ButtonGroup
      variant="outlined"
      orientation="vertical"
      aria-label="outlined primary button group"
    >
      <Button onClick={() => dispatch(countAddOne())} disabled={isDisabled}>
        Click:{count}
      </Button>
      <Button onClick={() => dispatch(countClear())}>CLEAR</Button>
      <Button onClick={() => dispatch(countStateToggle())}>
        {isDisabled ? "ABLE" : "DISABLE"}
      </Button>
    </ButtonGroup>
  );
}

export default ButtonGroupComp;
