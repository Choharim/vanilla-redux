import { createStore } from "redux";

const reducer = (state = 0, action) => {
  if (action.type === "add") {
    return state + 1;
  } else if (action.type === "minus") {
    return state - 1;
  } else {
    return state;
  }
}; // data를 수정하는 함수

const store = createStore(reducer); //data 저장소

store.dispatch({ type: "add" }); // reducer의 2번째 parameter에 전달할 message obj
store.dispatch({ type: "add" });
store.dispatch({ type: "add" });
store.dispatch({ type: "minus" });
console.log(store.getState()); //결과값 2
