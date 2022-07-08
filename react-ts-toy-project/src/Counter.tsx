import { useEffect, useState } from "react";
import { useCounterState, useCounterDispatch } from "./Context";
import styled from "styled-components";

function Counter() {
  const state = useCounterState();
  const dispatch = useCounterDispatch();

  const increaseCount = (count: number) =>
    dispatch({ type: "INCREMENT", count });
  const decreaseCount = (count: number) =>
    dispatch({ type: "DECREMENT", count });

  const [minusPressed, setMinusPressed] = useState(false);
  const [plusPressed, setPlusPressed] = useState(false);

  const handleMouseUp = () => {
    setMinusPressed(false);
    setPlusPressed(false);
  };

  const minusMouseDown = () => {
    decreaseCount(1);
    setMinusPressed(true);
  };
  const plusMouseDown = () => {
    increaseCount(1);
    setPlusPressed(true);
  };

  useEffect(() => {
    if (minusPressed) {
      const timer = setInterval(() => {
        decreaseCount(1);
      }, 200);
      return () => clearInterval(timer);
    }
    if (plusPressed) {
      const timer = setInterval(() => {
        increaseCount(1);
      }, 200);
      return () => clearInterval(timer);
    }
  });

  return (
    <Container>
      <Count>count: {state.count}</Count>
      <Buttons>
        <Button onMouseUp={handleMouseUp} onMouseDown={minusMouseDown}>
          -1
        </Button>
        <Button onMouseUp={handleMouseUp} onMouseDown={plusMouseDown}>
          +1
        </Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  width: 60vw;
  max-width: 600px;
  height: 300px;
  margin: 300px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: gray;
  border-radius: 20px;
`;

const Count = styled.div`
  font-size: 30px;
  color: white;
  text-align: center;
`;

const Buttons = styled.div`
  text-align: center;
  width: 150px;
  margin: 0 auto;
`;

const Button = styled.button`
  width: 30px;
  height: 30px;
  margin: 10px;
  background-color: black;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`;

export default Counter;
