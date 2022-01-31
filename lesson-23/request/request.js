// let request = new XMLHttpRequest();

// request.open("get", "https://jsonplaceholder.typicode.com/posts");
//request.setRequestHeader();
// request.onload = function(){
//     console.log(JSON.parse(request.responseText));
// }
// request.send();


//fetch
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((e) => {
        console.log(e);
        return e.json()
    })
    .then((e) => {
        console.log(e);
    })