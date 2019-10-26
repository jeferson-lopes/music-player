var x           = 1;
var time        = '';
var y           = 0;
var t           = 1;
var $           = document.querySelector.bind(document)
var botton      = $("#buttonStopPlay");
var img         = $(".imgalbum")
var player      = document.querySelector('#player');
var titleArtist = $("#titleArtist")
var titleMusic  = $("#titleMusic")
var load        = $(".load")

function play() {
    player.play();
    botton.src = 'img/pause.svg';
    img.classList.add("imgplay")
    setTimeout(() => {
        img.classList.add("imgplay2")
    }, 600)
    x = 2;
    time = setInterval(() => {
        if (t <= songs[y][4]) {
            load.style.width = t + 'px';
            t += 1;
        }
        else {
            clearInterval(time);
            t = 0;
        }
    }, 1000);
}
function stop() {
    clearInterval(time)
    load.style.width = 0 + 'px'
    player.pause();
    botton.src = 'img/play.svg'
    img.classList.remove("imgplay")
    img.classList.remove("imgplay2")
    x = 1;
}
function PlayStop() {
    if (x == 1) {
        play();
    } else if (x == 2) {
        stop();
    }
}
function Forwards() {
    stop();
    y += 1
    titleArtist.textContent = songs[y][1]
    titleMusic.textContent  = songs[y][0]
    player.src              = songs[y][3]
    img.src                 = songs[y][2]
}
function Backward() {
    stop();
    y -= 1
    titleArtist.textContent = songs[y][1]
    titleMusic.textContent  = songs[y][0]
    player.src              = songs[y][3]
    img.src                 = songs[y][2]
}
