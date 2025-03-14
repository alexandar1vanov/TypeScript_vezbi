var nizaKvadrati = new Array();
var count = 0;
var player = document.getElementById("player");
var gameContainer = document.getElementById("game-container");
var shirina = gameContainer ? gameContainer.clientWidth : 1150;
var visina = gameContainer ? gameContainer.clientHeight : 750;
var igrac = {
    points: 0,
    speed: 5,
    positionX: 50,
};
function movePlayer() {
    if (player) {
        player.style.left = "".concat(igrac.positionX, "%");
    }
}
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft" || event.key === "a") {
        igrac.positionX -= igrac.speed;
    }
    else if (event.key === "ArrowRight" || event.key === "d") {
        igrac.positionX += igrac.speed;
    }
    if (igrac.positionX <= 9) {
        igrac.positionX = 9;
    }
    else if (igrac.positionX >= 91) {
        igrac.positionX = 91;
    }
    movePlayer();
});
function spawnObjects() {
    count++;
    var div = document.createElement("div");
    div.className = "kvadrat";
    div.id = "kvadrat-".concat(count);
    var pozicijaX = Math.floor(Math.random() * shirina);
    var pozicijaY = Math.floor(Math.random() * 250) + visina; //ODKOMENTIRAJ POSLE
    var brzina = Math.floor(Math.random() * 3);
    var poeni = Math.floor(brzina * 10);
    var kvadrat4e = {
        id: count,
        points: poeni,
        speed: brzina,
        positionX: pozicijaX,
        positionY: pozicijaY
    };
    div.style.left = "".concat(kvadrat4e.positionX, "px");
    div.style.bottom = "".concat(kvadrat4e.positionY, "px");
    div.style.opacity = "0";
    nizaKvadrati.push(kvadrat4e);
    gameContainer === null || gameContainer === void 0 ? void 0 : gameContainer.appendChild(div);
}
function startMoving() {
    var gameContainer = document.getElementById("game-container");
    var visina = gameContainer ? gameContainer.clientHeight : 750;
    nizaKvadrati.forEach(function (element) {
        var kvadratElement = document.getElementById("kvadrat-".concat(element.id));
        if (kvadratElement) {
            element.positionY -= element.speed;
            kvadratElement.style.bottom = "".concat(element.positionY, "px");
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
    var kopce = document.getElementById("PlayGameButton");
    if (kopce != null) {
        kopce.style.display = "none";
    }
    setInterval(spawnObjects, 1000);
    requestAnimationFrame(startMoving);
}
