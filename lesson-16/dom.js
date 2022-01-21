// console.log(document.getElementById("commentID"));
// console.log(document.getElementById("some-title"));
// console.log(document.getElementById("some-id"));

//Не рекомендуем
// console.log(commentID);
// console.log(window["commentID"]);
// console.log(window["some-title"]);
// console.log(window["some-title"]);


//Получить группу элементов
// console.log(document.getElementsByName("comment-title"));
// console.log(document.getElementsByTagName("h3"));
// console.log(document.getElementsByClassName("wrapper-comment"));

// const nodeList = document.getElementsByName("comment-title");

// nodeList.forEach((e) => console.log(e));

// const htmlCollection = document.getElementsByTagName("h3");

// // htmlCollection.forEach((e) => console.log(e));//Error

// Array.prototype.forEach.call(htmlCollection, e => console.log(e));


//Новые элементы после отражения страницы без ее перезагрузки
//1.
const someArrayComment = [
    {
        title: "Some content title",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.`
    }
]
for (let i = 10; i--;) {
    someArrayComment.push(someArrayComment[0]);
}
// console.log(someArrayComment);

// let someStringHtml = '';
// someArrayComment.forEach(({ title, text }) => {
//     someStringHtml += `
//     <div>
//         <h3>${title}</h3>
//         <p>${text}</p>
//         <hr>
//     </div>`
// })

// document.querySelector("#commentID").innerHTML += someStringHtml;

//2.Создать напрямую в JS
const rootComment = document.querySelector("#commentId");

for (let i of someArrayComment) {
    const elementDiv = document.createElement("div");
    const elementH3 = document.createElement("h3");
    elementH3.innerText = i.title;
    const elementP = document.createElement("p");
    elementP.innerText = i.text;
    const elementHr = document.createElement("hr");

    elementDiv.appendChild(elementH3);
    elementDiv.appendChild(elementP);
    elementDiv.appendChild(elementHr);
    rootComment.appendChild(elementDiv);
}

//3.
const someBlock = document.createElement("h4");
someBlock.innerHTML = `
<br> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
pariatur.
<br>
`;
const allComments = document.querySelectorAll("div");
const randomIndex = Math.ceil(Math.random() * allComments.length);
rootComment.insertBefore(someBlock, allComments[randomIndex]);//Вставить новый элемент перед каким-либо
