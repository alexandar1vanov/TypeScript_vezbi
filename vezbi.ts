
interface Kvadrat {
  id: number;
  points: number;
  speed: number;
  positionX: number;
  positionY: number;
}

const nizaKvadrati: Array<Kvadrat> = new Array();
var count: number = 0;

function spawnObjects() {
  count++;
  const ekran = document.getElementById("game-container");
  const gameContainer = document.getElementById("game-container");
  const shirina = gameContainer ? gameContainer.clientWidth : 500;
  const visina = gameContainer ? gameContainer.clientHeight : 1200;

  const div = document.createElement("div");
  div.className = "kvadrat";
  div.id = `kvadrat-${count}`;
  // console.log(div)

  const pozicijaX: number = Math.floor(Math.random() * shirina);
  const pozicijaY: number = Math.floor(Math.random() * 250) + visina;    //ODKOMENTIRAJ POSLE
  const brzina: number = Math.floor(Math.random() * 5);
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
  div.style.opacity = "1";

  nizaKvadrati.push(kvadrat4e);

  ekran?.appendChild(div);
  // console.log(shirina);
  console.log(pozicijaY);
  // console.log(pozicijaX)
  // console.log('brzina',brzina)
  // console.log('poeni',poeni)
  // requestAnimationFrame(startMoving); 
}
function startMoving() {
  // const gameContainer = document.getElementById("game-container");
  nizaKvadrati.forEach(element => {
    const kvadratElement = document.getElementById(`kvadrat-${element.id}`);
    if (kvadratElement) {
      element.positionY -= element.speed;
      kvadratElement.style.bottom = `${element.positionY}px`;
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