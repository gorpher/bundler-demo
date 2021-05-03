import url from './images/logo.jpg'
console.log('hello world');
let image = new Image
image.src = url
document.body.appendChild(image)

const img = document.createElement('img');
img.setAttribute('src',"images/logo.jpg")
document.appendChild(img)

const a = document.createElement('a');
a.setAttribute('url',"https://esbuild.github.io/content-types/#base64")
document.appendChild(a)