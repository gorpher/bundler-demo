import css from "./style.css";
var div;
if (!div) {
    div = document.createElement("div");
    div.setAttribute("id", "div");
    div.innerText = 'this is a htmldiv element'
    document.body.append(div);
}
console.log('hello world!');
