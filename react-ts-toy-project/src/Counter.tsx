import { useCounterState, useCounterDispatch } from "./Context";
import styled from "styled-components";

function Counter() {
  const state = useCounterState();
  const dispatch = useCounterDispatch();

  const increaseCount = (count: number) =>
    dispatch({ type: "INCREMENT", count });
  const decreaseCount = (count: number) =>
    dispatch({ type: "DECREMENT", count });

  return (
    <Container>
      <Count>count: {state.count}</Count>
      <Buttons>
        <Button onClick={() => decreaseCount(1)}>-1</Button>
        <Button onClick={() => increaseCount(1)}>+1</Button>
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
