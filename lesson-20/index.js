// console.log(xml);

// const xmlStr = new XMLSerializer();
// console.log(xmlStr.serializeToString(xml));


// const xmlStr = new XMLSerializer().serializeToString(xml);
// const xmlDoc = new DOMParser().parseFromString(xmlStr, "application/xhtml+xml");
// console.log(xmlDoc.getElementsByTagName("p"));


const o  = {
        test: 1,
}

console.log(JSON.stringify(o));

const str_o  = `{
    "test": 1
}
`
console.log(JSON.parse(str_o));