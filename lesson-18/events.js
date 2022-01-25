//Mouse
// const linkToItem = document.querySelector("h2");

// linkToItem.addEventListener("click", function(){
//     console.log("Click");
// })


// linkToItem.onclick = function(){
//     console.log("Click");
// }


// function handler_1(){
//     console.log("Click1");
// }

// function handler_2(){
//     console.log("Click2");
// }

// linkToItem.addEventListener("click", handler_1);
// linkToItem.addEventListener("click", handler_2);


// linkToItem.onclick = handler_1;
// linkToItem.onclick = handler_2;


// linkToItem.addEventListener("mousedown", () => console.log("mousedown"));
// linkToItem.addEventListener("mouseup", () => console.log("mouseup"));

// linkToItem.addEventListener("mouseover", () => console.log("mouseover"));
// linkToItem.addEventListener("mouseout", () => console.log("mouseout"));
// linkToItem.addEventListener("mousemove", () => console.log("mousemove"));


// linkToItem.addEventListener("contextmenu", (event) => {
//     event.preventDefault();
//     console.log("contextmenu", event);
// })



//Window keyboard
// window.addEventListener('keydown', (event) => {
//     console.log('keydown', event);
// })

// window.addEventListener('keyup', () => {
//     console.log('keyup');
// })

// window.addEventListener('keypress', () => {
//     console.log('keypress');
// })


//Form
// document.forms[0].onsubmit = function (e) {
//     e.preventDefault();
//     let validPassword = false;
//     const password = document.querySelector('[type="password"]').value;
//     console.log(password);

//     for (let i = 0; i < 10; i++) {
//         validPassword = password.includes(`${i}`);
//         if (validPassword) break;
//     }
//     if (!validPassword) alert("bad password");
//     else alert("good password");
// }


// document.forms[0].onsubmit = function (e) {
//     e.preventDefault();

// }
// document.querySelector('[type="password"]').addEventListener("change", (event) => {
//     let validPassword = false;
//     const password = event.target.value;

//     for (let i = 0; i < 10; i++) {
//         validPassword = password.includes(`${i}`);
//         if (validPassword) break;
//     }
//     if (!validPassword) alert("bad password");
//     else alert("good password");
// });


document.forms[0].onsubmit = function (e) {
    e.preventDefault();
}
document.querySelector('[type = "password"]').addEventListener("input", (event) => {

    const password = event.target.value;

    if (password.length < 10) {
        document.querySelector('[message]').innerText = "password < 10";
    } else {
        document.querySelector('[message]').innerText = "";
    }
})