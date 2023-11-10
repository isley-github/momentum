const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// Math.random() * n (n: 변수 내 element의 수, array는 0번째 인덱스부터 시작한다는 점에 유의)

// 아래 3줄은 html에서 <img src="img/0.jpg"/>로 설정하는 것과 같은 역할!

const bgImage = document.createElement("img"); // bgImage = background image

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); 
// .appendChild() 화면 상단에 내용 추가 (html의 body로)
// .prepend() 화면 하단에 내용 추가 (html의 body로)