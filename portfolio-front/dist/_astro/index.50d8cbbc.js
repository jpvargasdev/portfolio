import{R as c}from"./index.57491c08.js";import{j as l}from"./index.d175d2fc.js";const i="https://lh3.googleusercontent.com/DvPF9jF_pTLfx1fgJIipkbr4ns7V0G5wIankvxnH3sRlkpKj3HjBbRg20YCnPoaOywBLMeLk9X5SJ-SCZxpEiJJh6YwAE87uJB-w6hTaGGmiv3mBA6-wJMu9rBYGOomog6COt-p5uE0";function u(o){if(!o)return[];const s=[];return o&&o.map((e,t)=>{s.push([e])}),s}function d({images:o}){const s=u(o),[e,t]=c.useState(s[0]),r=c.useCallback(n=>{t(s[n])},[]),a=e&&e.length?e[0].url:i;return l.jsxs("div",{className:"h-full w-full rounded-3xl",children:[l.jsx("img",{src:a,alt:"img",className:"object-cover h-full w-full rounded-3xl"}),l.jsx("a",{href:"https://photos.app.goo.gl/Mhvixre67TWXifBi9",className:"absolute right-8 top-8 h-12 w-12 cursor-pointer hover:scale-110",children:l.jsx("img",{src:"google.png",alt:"icon google",className:"object-contain h-full w-full"})}),l.jsx("div",{children:l.jsxs("ul",{className:"absolute bottom-2 right-8 left-8 flex flex-1 justify-around bg-background_light bg-opacity-75 rounded-full border",children:[l.jsx("li",{className:"h-full bg-background_light rounded-full p-2 border my-2 cursor-pointer hover:scale-110",onClick:()=>r(0),children:l.jsx("img",{src:"svg/travel.svg",alt:"icon travel",className:"h-6 w-6"})}),l.jsx("li",{className:"h-full bg-background_light rounded-full p-2 border my-2 cursor-pointer hover:scale-110",onClick:()=>r(1),children:l.jsx("img",{src:"svg/food.svg",alt:"icon travel",className:"h-6 w-6"})}),l.jsx("li",{className:"h-full bg-background_light rounded-full p-2 border my-2 cursor-pointer hover:scale-110",onClick:()=>r(2),children:l.jsx("img",{src:"svg/rock.svg",alt:"icon travel",className:"h-6 w-6"})})]})})]})}function m(){return l.jsx("div",{})}export{m as B,d as P};
