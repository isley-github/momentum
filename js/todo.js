const toDoForm = document.getElementById("todo-form"); 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
// form 3번째 줄 ul
// toDoForm.querySelector("input"); (id가 todo-form인 form에서 input 찾기)

const TODOS_KEY = "todos";

let toDos = [];
// let 업데이트 가능

// const toDos = [];
// newTodo를 담을 array 생성
// application 실행 시 toDos array는 빈 값으로 시작함

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// localStorage에 array로 저장된 newTodo 저장
// JSON.stringify() = object 또는 array 값을 string으로 저장하고 싶을 때 사용

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  console.log(typeof li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
// toDo는 toDos DB에 있는 요소 중 하나
// toDos.filter((toDo) => toDo.id !== li.id) 함수는 DB에 있는 모든 요소에 대해 실행됨
// toDo.id !== li.id 으로 하면 li.id이 string이라 숫자인 toDo.id는 number 타입 (비교할 타입이 달라 filter로 걸러질 것이 없음)
// parseInt = string 타입을 number 타입으로 만들어줌

//target = 클릭된 HTML element
// parentElement = 클릭된 element의 상위 li

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// newTodo.text 단순 text가 아니라 object에 포함된 text
// li.appendChild(span); = li 내부에 <span></span>이 들어가게 된다.
// append 나중에 추가
// span.innerText = newTodo; span의 text로 handleToDoSubmit의 newTodo가 들어간다.
// event 첫 발생 시 handleToDoSubmit의 첫 번째 인자로 들어감

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

// toDos.push(newTodo); // 기존의 newTodo는 입력 내용을 text 형태로 DB에 push
// newTodoObj의 object는 text와 id를 갖는다.
// newTodoObj는 toDos array에 object로 저장된다

toDoForm.addEventListener("submit", handleToDoSubmit);

// newTodo = input에서 얻은 value를 빈칸처리("")하기 이전 값(을 나타내는 문자열)
// -> paintToDo 함수에 해당 값을 넣어 호출
// const newTodo = toDoInput.value; -> paintToDo(newTodo);
// newTodo에 들어가는 value는 복사값이라 원본 value가 달라져도 변수에 들어간 복사된 value는 달라지지 않는다
// 그래서 이후에 input된 value를 빈칸처리("")해도 newTodo에는 아무 변화 없음
// const newTodo = toDoInput.value; input의 현재 value를 새로운 변수인 newTodo 변수에 복사
// console에서 확인하면 input한 내용이 뜸 - (newTodo, toDoInput.value) 부분은 새로 입력한 newTodo만 뜨고,
// toDoInput.value는 빈칸 처리 -> toDoInput.value = ""; 라고 value값을 빈칸 처리했기 때문

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
// parsedToDos.forEach((item) => console.log("this is turn of ", item)); 는
// function sayHello(item) {console.log("this is the turn of", item);}를 더 짧게 표현한 것
// forEach 함수는 parsedToDos 배열의 요소 각각에 painToDo를 실행한다

// JSON.parse() = string 형태를 javascript에서 사용 가능한 object 형태로 변환
// => arrow function
// forEach = array의 각 item에 대해 하나의 function을 실행시킴
// javascript 자체에 현재 처리되는 item을 넘겨주는 기능 존재
// (function 호출하면서 array 내 각 item을 넘겨준다)

// localStorage는 toDos array를 복사한 것 (DB는 아님)

// Date.now() 1/1000초를 나타내는 함수 - 랜덤 숫자 부여 시 사용

// .filter
// 무조건 true를 포함해야 함 - true를 리턴하는 (기존)item만 새 array에 포함
// false가 있다면 해당 item은 새 array에 포함되지 않는다
