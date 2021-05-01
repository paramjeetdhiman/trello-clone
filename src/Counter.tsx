import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
interface State {
  count: number;
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
interface Action {
  type: string;
}

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

type Actions = { type: "increment" } | { type: "decrement" };

/// action creaters
const increment = (): Actions => ({ type: "increment" });
const decrement = (): Actions => ({ type: "decrement" });

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/

/// main component which dispatch action to reducer
const App = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <>
      <p>Count: {state.count}</p>

      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(increment())}> + </button>

      {/* manually created action objects*/}
      {/* <button onClick={() => dispatch({ type: "decremnent" })}>-</button>
      <button onClick={() => dispatch({ type: "incremnent" })}>+</button> */}
    </>
  );
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count + 1 };

    default:
      throw new Error();
  }
};

//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
export class Counter extends React.Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };
  private increment = () => {
    // ...
  };
  private decrement = () => {
    // ...
  };
  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

/*
const [state, dispatch] = useReducer(reducer, initialState, init);

/// action creators
const setName = (name ) => ({type:"SET_NAME", name})
dispatch(setName("George"));

// dispatch({ type: "SET_NAME", name: "George" });


*/
