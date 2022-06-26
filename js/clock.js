const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`
}

// 페이지가 로딩된 후 1초 후에 실행되기 때문에 함수 호출하는 코드를 작성해줌
getClock();
setInterval(getClock, 1000);