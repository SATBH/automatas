console.log("Hello world")
let x = fetch("./some.js").then(resp => console.log(resp.text()))
