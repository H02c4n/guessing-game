let container = document.querySelector(".container");

let htmlstring = `
<h1>Guess Game</h1>
<span><h2 class="message"></h2></span>
<p>Can you guess a number that computer choose randomly between <b><span class="min">0</span></b> and <b><span class="max">100</span></b> ?</p>
`;

let min = 1,
  max = 100;

for (let i = min; i <= max; i++) {
  htmlstring += `<button class="btn" value="${i}">${i}</button>`;
}
container.innerHTML = htmlstring;

let btn = document.querySelectorAll(".btn");
//console.dir(btn);

let life = 5;

const randomNumber = Math.ceil(Math.random() * max);
console.log(randomNumber);

for (let i = 0; i < btn.length; i++) {
  //console.log(btn[i].innerHTML);
  btn[i].addEventListener("click", function (e) {
    life -= 1;
    if (life < 0) {
      message("Game Over", "red");
      msgText.insertAdjacentHTML("afterend", newGame);

      const btnNew = document.querySelector(".newGame");
      btnNew.addEventListener("click", function () {
        window.location.reload();
      });
    } else {
      if (e.target.value == randomNumber) {
        message("Tebrikler", "green");
        msgText.insertAdjacentHTML("afterend", newGame);
        const btnNew = document.querySelector(".newGame");
        btnNew.addEventListener("click", function () {
          window.location.reload();
        });
        btn[i].style.backgroundColor = "green";
        btn[i].style.color = "white";
      } else if (e.target.value < randomNumber) {
        message("Go up", "green");
        for (let i = 0; i < e.target.value; i++) {
          btn[i].style.backgroundColor = "black";
          btn[i].style.color = "red";
          btn[i].style.display = "none";
        }
      } else {
        message("Azalt", "red");
        for (let i = e.target.value - 1; i < max; i++) {
          btn[i].style.backgroundColor = "black";
          btn[i].style.color = "red";
          btn[i].style.display = "none";
        }
      }
    }
  });
}

const msgText = document.querySelector(".message");
const newGame = `<span><button class="newGame"><i class="fa-solid fa-arrows-rotate"></i></button></span>`;
function message(msg, color) {
  msgText.innerHTML = msg;
  msgText.style.color = color;
}

const minNumber = document.querySelector(".min"),
  maxNumber = document.querySelector(".max");

minNumber.textContent = min;
maxNumber.textContent = max;
