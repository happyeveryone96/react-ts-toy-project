import React from "react";
import Counter from "./Counter";
import { CounterProvider } from "./Context";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <CounterProvider>
      <GlobalStyles />
      <Counter />
    </CounterProvider>
  );
};

export default App;
