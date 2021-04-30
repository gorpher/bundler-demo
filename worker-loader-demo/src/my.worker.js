let index = 0
onmessage = function (event) {
    var workerResult = event.data;
    console.log('my.worker.js处理消息', workerResult);
    index++
    postMessage({
        origin: 'my.worker.js',
        text: `已经阅读了 来之${workerResult.origin}的信息 ，内容是${workerResult.text}  , 次数：${index} `
    });
};

onerror = function (event) {
    console.log('onerror', event);
}