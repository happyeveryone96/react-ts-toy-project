import React, { useReducer, useContext, createContext, Dispatch } from "react";

type State = {
  count: number;
};

type Action =
  | { type: "INCREMENT"; count: number }
  | { type: "DECREMENT"; count: number };

type CounterDispatch = Dispatch<Action>;

const CounterStateContext = createContext<State | null>(null);
const CounterDispatchContext = createContext<CounterDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + action.count,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - action.count,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
  });

  return (
    <CounterStateContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterStateContext.Provider>
  );
}

export function useCounterState() {
  const state = useContext(CounterStateContext);
  if (!state) throw new Error("Cannot find CounterProvider");
  return state;
}

export function useCounterDispatch() {
  const dispatch = useContext(CounterDispatchContext);
  if (!dispatch) throw new Error("Cannot find CounterProvider");
  return dispatch;
}
