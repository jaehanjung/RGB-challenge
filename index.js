function randomNumber() {
  return Math.floor(256 * Math.random());
}

function randomColorCode() {
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

// 컬러 코드
const colorCodeEl = document.querySelector(".color-code");
colorCodeEl.textContent = randomColorCode();

// box 클래스
const Boxes = document.querySelectorAll(".box");

let correctAnswer;
let score = 0;
document.querySelector(".score").textContent = score;

function newStage() {
  const colorCodes = [randomColorCode(), randomColorCode(), randomColorCode()];
  Boxes.forEach((el, index) => {
    el.style.backgroundColor = colorCodes[index];
  });
  correctAnswer = Math.floor(Math.random() * 3);
  colorCodeEl.textContent = colorCodes[correctAnswer];
}

Boxes.forEach((el, index) => {
  el.addEventListener("click", () => {
    el.classList.add('large');
    if (correctAnswer === index) {
      document.querySelector('.modal.rigth').classList.add('show');
      score++;
    } else {
      document.querySelector('.modal-score').textContent = score;
      document.querySelector('.modal.bad').classList.add('show')
      score = 0;
    }
    document.querySelector(".score").textContent = score;
  });
});

document.querySelector('.modal.rigth .close').addEventListener('click',()=>{
  newStage();
  Boxes.forEach(el =>{
    el.classList.remove('large');
  })
  document.querySelector('.modal.rigth').classList.remove('show');
})
document.querySelector('.modal.bad .badclose').addEventListener('click',()=>{
  newStage();
  Boxes.forEach(el =>{
    el.classList.remove('large');
  })
  document.querySelector('.modal.bad').classList.remove('show');
})

newStage();
