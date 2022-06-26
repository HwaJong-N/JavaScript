const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


// 전달된 정보는 이벤트 처리 함수의 첫 번째 인자에 포함
function onLoginSubmit(event) {
    // 브라우저가 기본 동작을 실행하지 못하게 막아줌
    // form의 기본동작 : submit & 새로고침
    event.preventDefault();

    // 버튼을 누르면 폼을 숨김
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // 입력받은 값을 local storage 저장하고 화면에 출력
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}


// display 적용 및 텍스트 변경하는 함수
function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}!!`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 저장된 정보가 있는지 확인
if(savedUsername === null) {
    // show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    // event object 정보를 포함하여 이벤트 처리 함수를 호출
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    // show username
    paintGreetings(savedUsername);
}

