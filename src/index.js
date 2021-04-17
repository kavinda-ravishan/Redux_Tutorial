import store from "./store";

store.subscribe(() => {
  console.log("store changed!", store.getState());
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug 1",
  },
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug 2",
  },
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug 3",
  },
});

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 2,
  },
});

console.log(store.getState());
