const REDUX_CARDS = [
  {
    id: 1,
    question: "What is Redux?",
    answer:
      "Redux is a predictable state container for JavaScript applications, used to manage application state.",
  },
  {
    id: 2,
    question: "What are the core principles of Redux?",
    answer:
      "The core principles are: Single source of truth, State is read-only, and Changes are made with pure functions.",
  },
  {
    id: 3,
    question: "What is a store in Redux?",
    answer:
      "A store is an object that holds the entire state of your application.",
  },
  {
    id: 4,
    question: "What is an action in Redux?",
    answer:
      "An action is a plain JavaScript object that describes what happened, containing a `type` property and optionally other data.",
  },
  {
    id: 5,
    question: "What is a reducer in Redux?",
    answer:
      "A reducer is a pure function that takes the current state and an action, and returns the new state.",
  },
  {
    id: 6,
    question: "What is the purpose of the `combineReducers` function?",
    answer:
      "It is used to combine multiple reducers into a single reducer function.",
  },
  {
    id: 7,
    question: "What is the role of middleware in Redux?",
    answer:
      "Middleware allows you to intercept and act on actions before they reach the reducer, useful for logging, async actions, etc.",
  },
  {
    id: 8,
    question: "What is the `connect` function from `react-redux` used for?",
    answer:
      "It connects a React component to the Redux store, allowing it to read state and dispatch actions.",
  },
  {
    id: 9,
    question: "What is the `Provider` component in Redux?",
    answer:
      "The `Provider` component makes the Redux store available to any nested components wrapped with `connect` or `useSelector`.",
  },
  {
    id: 10,
    question: "What are thunks in Redux?",
    answer:
      "Thunks are middleware that allow you to write action creators with side effects, such as asynchronous logic.",
  },
  {
    id: 11,
    question: "What is the `useSelector` hook in Redux?",
    answer:
      "The `useSelector` hook allows you to extract data from the Redux store state in functional components.",
  },
  {
    id: 12,
    question: "What is the `useDispatch` hook in Redux?",
    answer:
      "The `useDispatch` hook allows you to dispatch actions from functional components.",
  },
  {
    id: 13,
    question: "What problem does Redux solve?",
    answer:
      "Redux helps manage complex application state and makes state predictable, easier to debug, and centralized.",
  },
  {
    id: 14,
    question: "How do you install Redux in a React project?",
    answer:
      "You install Redux and React-Redux by running `npm install redux react-redux`.",
  },
  {
    id: 15,
    question: "What is the difference between Redux and Context API?",
    answer:
      "Redux is a full-fledged state management library with middleware support, while Context API is a React feature for simple state sharing.",
  },
];

export default REDUX_CARDS;
