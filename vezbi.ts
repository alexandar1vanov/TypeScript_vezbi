
interface Kvadrat {
  id: number;
  points: number;
  speed: number;
  positionX: number;
  positionY: number;
}

interface Igrac {
  points: number;
  speed: number;
  positionX: number;
}




const nizaKvadrati: Array<Kvadrat> = new Array();
var count: number = 0;

const player = document.getElementById("player");
const gameContainer = document.getElementById("game-container");
const shirina: number = gameContainer ? gameContainer.clientWidth : 1150;
const visina: number = gameContainer ? gameContainer.clientHeight : 750;
const igrac: Igrac = {
  points: 0,
  speed: 5,
  positionX: 50,
}
function movePlayer() {
  if (player) {
    player.style.left = `${igrac.positionX}%`
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "a") {
    igrac.positionX -= igrac.speed;
  } else if (event.key === "ArrowRight" || event.key === "d") {
    igrac.positionX += igrac.speed;
  }
  if (igrac.positionX <= 9) {
    igrac.positionX = 9;
  } else if (igrac.positionX >= 91) {
    igrac.positionX = 91;
  }
  movePlayer();
});

function spawnObjects() {
  count++;


  const div = document.createElement("div");
  div.className = "kvadrat";
  div.id = `kvadrat-${count}`;

  const pozicijaX: number = Math.floor(Math.random() * shirina);
  const pozicijaY: number = Math.floor(Math.random() * 250) + visina;    //ODKOMENTIRAJ POSLE
  const brzina: number = Math.floor(Math.random() * 3);
  const poeni: number = Math.floor(brzina * 10)

  const kvadrat4e: Kvadrat = {
    id: count,
    points: poeni,
    speed: brzina,
    positionX: pozicijaX,
    positionY: pozicijaY
  }
  div.style.left = `${kvadrat4e.positionX}px`;
  div.style.bottom = `${kvadrat4e.positionY}px`;
  div.style.opacity = "0";

  nizaKvadrati.push(kvadrat4e);

  gameContainer?.appendChild(div);

}
function startMoving() {
  const gameContainer = document.getElementById("game-container");
  const visina = gameContainer ? gameContainer.clientHeight : 750;
  nizaKvadrati.forEach(element => {
    const kvadratElement = document.getElementById(`kvadrat-${element.id}`);
    if (kvadratElement) {
      element.positionY -= element.speed;
      kvadratElement.style.bottom = `${element.positionY}px`;
      if (element.positionY <= visina) {
        kvadratElement.style.opacity = "1";
      }
      if (element.positionY <= 0) {
        kvadratElement.style.display = "none";
      }
    }
  });
  requestAnimationFrame(startMoving);
}

function startGame() {
  const kopce = document.getElementById("PlayGameButton");
  if (kopce != null) {
    kopce.style.display = "none";
  }
  setInterval(spawnObjects, 1000);
  requestAnimationFrame(startMoving);
}