const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// HTML element 생성
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// body에 html을 추가 (append라서 가장 뒤 쪽에 추가됨)
document.body.appendChild(bgImage);