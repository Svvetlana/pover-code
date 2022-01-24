const someText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `

const P = document.createElement("p");

P.innerText = someText;
P.id = "some";
P.className = "text-1";
P.className = "text-2";
P.className = "text-3";
P.setAttribute("transform", true);

P.style.cssText = `
    color: rgb(255, 0, 255);
    background: rgb(0,255,0);
    transform: skew(-45deg);
`
setInterval(()=> {
P.style.fontSize = `${Math.random() * 20 + 2}px`;
}, 1000);

document.body.appendChild(P);
