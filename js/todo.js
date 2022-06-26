const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
    // 어떤 버튼이 눌렸는지 알 수 없음
    // target : event가 발생한 HTML element
    // parent : event가 발생한 element의 부모

    // 클릭된 버튼의 부모 element를 알아낸 후 삭제
    const li = event.target.parentElement;
    li.remove();

    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {

    // HTML element 생성
    const li = document.createElement("li");
    li.id = newToDo.id;

    // To-Do 내용을 화면에 출력
    const span = document.createElement("span");
    span.innerText = newToDo.text;

    // 버튼 출력
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);

    // span 태그와 button 태그를 li 태그 내부에 넣어줌
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();

    // 입력된 값 받아오고, input을 비움
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    // array에 object 형태로 저장
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }

    toDos.push(newToDoObj);

    paintToDo(newToDoObj);

    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDOs = JSON.parse(savedToDos);
    // 이전에 입력되었던 값을 복원
    toDos = parsedToDOs;

    // item이 배열의 각 요소를 의미
    // 배열의 각 요소를 화면에 출력
    parsedToDOs.forEach(paintToDo);
}

