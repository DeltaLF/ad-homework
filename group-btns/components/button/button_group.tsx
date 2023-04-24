import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function ButtonGroupComp() {
  const [count, setCount] = React.useState(0);
  const [isDisabled, SetIsDisabled] = React.useState(false);

  const buttonPlusHandler = React.useCallback(() => {
    setCount((preCount) => preCount + 1);
  }, []);
  const buttonClearHandler = React.useCallback(() => {
    setCount(0);
  }, []);
  const buttonToggleDisableHandler = React.useCallback(() => {
    SetIsDisabled((preState) => !preState);
  }, []);

  return (
    <ButtonGroup
      variant="outlined"
      orientation="vertical"
      aria-label="outlined primary button group"
    >
      <Button onClick={buttonPlusHandler} disabled={isDisabled}>
        Click:{count}
      </Button>
      <Button onClick={buttonClearHandler}>CLEAR</Button>
      <Button onClick={buttonToggleDisableHandler}>
        {isDisabled ? "ABLE" : "DISABLE"}
      </Button>
    </ButtonGroup>
  );
}

export default ButtonGroupComp;
