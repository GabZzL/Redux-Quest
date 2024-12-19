const REDUX_CARDS = [
  {
    question: "What is Redux?",
    answer:
      "Redux is a predictable state container for JavaScript applications, used to manage application state.",
  },
  {
    question: "What are the core principles of Redux?",
    answer:
      "The core principles are: Single source of truth, State is read-only, and Changes are made with pure functions.",
  },
  {
    question: "What is a store in Redux?",
    answer:
      "A store is an object that holds the entire state of your application.",
  },
  {
    question: "What is an action in Redux?",
    answer:
      "An action is a plain JavaScript object that describes what happened, containing a `type` property and optionally other data.",
  },
  {
    question: "What is a reducer in Redux?",
    answer:
      "A reducer is a pure function that takes the current state and an action, and returns the new state.",
  },
  {
    question: "What is the purpose of the `combineReducers` function?",
    answer:
      "It is used to combine multiple reducers into a single reducer function.",
  },
  {
    question: "What is the role of middleware in Redux?",
    answer:
      "Middleware allows you to intercept and act on actions before they reach the reducer, useful for logging, async actions, etc.",
  },
  {
    question: "What is the `connect` function from `react-redux` used for?",
    answer:
      "It connects a React component to the Redux store, allowing it to read state and dispatch actions.",
  },
  {
    question: "What is the `Provider` component in Redux?",
    answer:
      "The `Provider` component makes the Redux store available to any nested components wrapped with `connect` or `useSelector`.",
  },
  {
    question: "What are thunks in Redux?",
    answer:
      "Thunks are middleware that allow you to write action creators with side effects, such as asynchronous logic.",
  },
  {
    question: "What is the `useSelector` hook in Redux?",
    answer:
      "The `useSelector` hook allows you to extract data from the Redux store state in functional components.",
  },
  {
    question: "What is the `useDispatch` hook in Redux?",
    answer:
      "The `useDispatch` hook allows you to dispatch actions from functional components.",
  },
  {
    question: "What problem does Redux solve?",
    answer:
      "Redux helps manage complex application state and makes state predictable, easier to debug, and centralized.",
  },
  {
    question: "How do you install Redux in a React project?",
    answer:
      "You install Redux and React-Redux by running `npm install redux react-redux`.",
  },
  {
    question: "What is the difference between Redux and Context API?",
    answer:
      "Redux is a full-fledged state management library with middleware support, while Context API is a React feature for simple state sharing.",
  },
];

export default REDUX_CARDS;
