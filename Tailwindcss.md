### Install


1. vite+vue3+tailwindcss

```bash
yarn create vite vite-vue-tailwindcss-demo --template vue
cd  vite-vue-tailwindcss-demo
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

2. next.js+tailwindcss

```bash
npx create-next-app -e with-tailwindcss nextjs-tailwindcss-demo
cd  nextjs-tailwindcss-demo
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```


3. nuxt.js+tailwindcss

```bash
npx create-nuxt-app nuxtjs-tailwindcss-demo
cd  nuxtjs-tailwindcss-demo
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init
```
```js
// nuxt.config.js
export default {
  buildModules: ['@nuxtjs/tailwindcss']
}
```
4. react+tailwindcss

```bash
npx create-react-app craco-react-tailwindcss
npm install @craco/craco
npx tailwindcss-cli@latest init
```



### 核心概念
#### 1. 功能类优先
#### 2. 响应式设计

```
sm	640px	  @media (min-width: 640px)
md	768px	  @media (min-width: 768px)
lg	1024px	@media (min-width: 1024px)
xl	1280px	@media (min-width: 1280px)
2xl	1536px	@media (min-width: 1536px)
```

1. 移动优先
  - 定位手机屏幕
  - 定位单个断点
2. 自定义断点


#### 3. 悬停、焦点和其它状态

#### 4. 深色模式

#### 5. 定义基础样式

#### 6. 提取组件
1. 创建模板片段提取Javascript组件
2. 使用@apply提取组件类
3. 使用组件插件编写组件类

#### 7. 添加自定义的功能类
#### 8. 函数指令
- @tailwind
- @apply
- @layer
- @variants
- @responsive
- @screen