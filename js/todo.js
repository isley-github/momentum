const toDoForm = document.getElementById("todo-form"); 
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
// form 3번째 줄 ul
// toDoForm.querySelector("input"); (id가 todo-form인 form에서 input 찾기)

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}
//target = 클릭된 HTML element
// parentElement = 클릭된 element의 상위 li

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// li.appendChild(span); = li 내부에 <span></span>이 들어가게 된다.
// append 나중에 추가
// span.innerText = newTodo; span의 text로 handleToDoSubmit의 newTodo가 들어간다.
// event 첫 발생 시 handleToDoSubmit의 첫 번째 인자로 들어감

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
  }

toDoForm.addEventListener("submit", handleToDoSubmit);

// newTodo = input에서 얻은 value를 빈칸처리("")하기 이전 값(을 나타내는 문자열)
// -> paintToDo 함수에 해당 값을 넣어 호출
// const newTodo = toDoInput.value; -> paintToDo(newTodo);
// newTodo에 들어가는 value는 복사값이라 원본 value가 달라져도 변수에 들어간 복사된 value는 달라지지 않는다
// 그래서 이후에 input된 value를 빈칸처리("")해도 newTodo에는 아무 변화 없음
// const newTodo = toDoInput.value; input의 현재 value를 새로운 변수인 newTodo 변수에 복사
// console에서 확인하면 input한 내용이 뜸 - (newTodo, toDoInput.value) 부분은 새로 입력한 newTodo만 뜨고,
// toDoInput.value는 빈칸 처리 -> toDoInput.value = ""; 라고 value값을 빈칸 처리했기 때문