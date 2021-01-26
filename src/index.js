import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

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

const onChange = () => {
  number.innerText = store.getState();
};
store.subscribe(onChange); //data가 바뀔때마다 호출해줌

add.addEventListener("click", () => store.dispatch({ type: "add" }));
minus.addEventListener("click", () => store.dispatch({ type: "minus" }));
