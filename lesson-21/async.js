//callback keyboard

// const BALL = document.querySelector(".circle");
// const PATH = [
//     { x: 50, y: 100 },
//     { x: 0, y: 50 },
//     { x: 50, y: 0 },
//     { x: 100, y: 50 }
// ]
// let i = 0;

// function move(x, y) {
//     BALL.style.left = `${x}%`;
//     BALL.style.top = `${y}%`;
// }

// let id = null;

// window.addEventListener("keyup", (e) => {
//     if (e.key === " ") {
//         clearInterval(id);
//         id = setInterval(() => {
//             const { x, y } = PATH[i];
//             move(x, y);
//             if (++i === PATH.length) i = 0;
//             console.log("next");
//         }, 1000)
//     }
// })


//callback mouse

// const BALL = document.querySelector(".circle");
// const PATH = [
//     { x: 50, y: 100 },
//     { x: 0, y: 50 },
//     { x: 50, y: 0 },
//     { x: 100, y: 50 }
// ]
// let i = 0;

// function move(x, y) {
//     BALL.style.left = `${x}%`;
//     BALL.style.top = `${y}%`;
// }

// let idInterval = null;
// let idStart = null;

// function start() {
//     clearTimeout(idStart);
//     clearInterval(idInterval);
//     i = 0;
//     BALL.style.display = "none";
//     move(50, 50);
//     idStart = setTimeout(() => {
//         idInterval = setInterval(() => {
//             BALL.style.display = "block";
//             const { x, y } = PATH[i];
//             move(x, y);
//             if (++i === PATH.length) i = 0;
//         }, 1000)
//     }, 3000) 
// }
// start();

// window.addEventListener("mousemove", start)


//promise

const BALL = document.querySelector(".circle");
const PATH = [
    { x: 50, y: 100 },
    { x: 0, y: 50 },
    { x: 50, y: 0 },
    { x: 100, y: 50 }
]
let i = 0;
let idStart = null;
let IS_START = false;
let timeLastMove = new Date().getTime();

function move(x, y) {
    BALL.style.left = `${x}%`;
    BALL.style.top = `${y}%`;
}

// const promise = new Promise((resolve, reject) => {

// })
function sleep(delay = 1000) {
    return new Promise((r) => setTimeout(r, delay))
}

(async function () {
    while (true) {
        await sleep();

        if (new Date().getTime() - timeLastMove < 3000) {
            BALL.style.display = "none";
            i = 0;
            move(50, 50);
            continue;
        }
        else {
            BALL.style.display = "block";
            await sleep(0)
        }

        const { x, y } = PATH[i];

        move(x, y);

        if (++i === PATH.length) i = 0;
    }
})()

window.addEventListener("mousemove", (e) => {
    timeLastMove = new Date().getTime();
})