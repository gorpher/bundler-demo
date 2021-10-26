import Worker from "./my.worker.js";

var worker = new Worker();
console.log('worker', worker);
var result;
worker.onmessage = function (event) {
  console.log('event', event);
  if (!result) {
    result = document.createElement("div");
    result.setAttribute("id", "result");
    document.body.append(result);
  }
  result.innerText = JSON.stringify(event.data);
};

document.getElementById("button").addEventListener("click", function () {
  worker.postMessage({
    origin: 'main.js',
    text: '点击了button',
  });// 消息内容可以是binary text json 任意数据类型
});