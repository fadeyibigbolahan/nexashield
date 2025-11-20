import{r as n,u as g,j as e,L as x}from"./index-BysBb1OP.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),u=(...a)=>a.filter((s,o,l)=>!!s&&l.indexOf(s)===o).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=n.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:d="",children:r,iconNode:t,...h},i)=>n.createElement("svg",{ref:i,...w,width:s,height:s,stroke:a,strokeWidth:l?Number(o)*24/Number(s):o,className:u("lucide",d),...h},[...t.map(([m,p])=>n.createElement(m,p)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=(a,s)=>{const o=n.forwardRef(({className:l,...d},r)=>n.createElement(y,{ref:r,iconNode:s,className:u(`lucide-${b(a)}`,l),...d}));return o.displayName=`${a}`,o};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=c("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=c("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=c("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=c("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=c("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=c("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),L="/nexashield/assets/nexashield-DAv6uj1G.png",C=()=>{const[a,s]=n.useState(!1),[o,l]=n.useState(!1),d=g();n.useEffect(()=>{const t=()=>{l(window.scrollY>20)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]);const r=[{path:"/",label:"Home",icon:v},{path:"/services",label:"Services",icon:f},{path:"/about",label:"About Us",icon:N},{path:"/contact",label:"Contact",icon:j}];return e.jsx("nav",{className:`fixed w-full top-0 z-50 transition-all duration-300 ${o?"bg-white/95 backdrop-blur-md shadow-lg py-3":"bg-white py-4"}`,children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs(x,{to:"/",className:"flex items-center space-x-2 group",children:[e.jsx("img",{src:L,alt:"Nexashield Logo",className:"w-8 h-8 sm:w-10 sm:h-10 transform group-hover:scale-105 transition-transform duration-300"}),e.jsx("span",{className:"text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent",children:"Nexashield"})]}),e.jsx("div",{className:"hidden md:flex items-center space-x-1",children:r.map(t=>{const h=t.icon,i=d.pathname===t.path;return e.jsxs(x,{to:t.path,className:`relative flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${i?"text-blue-600":"text-gray-700 hover:text-blue-600 hover:bg-blue-50"}`,children:[e.jsx(h,{className:`w-4 h-4 transition-transform duration-300 ${i?"scale-110":"group-hover:scale-110"}`}),e.jsx("span",{children:t.label}),i&&e.jsx("span",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"})]},t.path)})}),e.jsx("div",{className:"hidden md:block",children:e.jsx(x,{to:"/contact",children:e.jsx("button",{className:"px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-300",children:"Get Started"})})}),e.jsx("button",{onClick:()=>s(!a),className:"md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300","aria-label":"Toggle menu",children:a?e.jsx(M,{className:"w-6 h-6"}):e.jsx(k,{className:"w-6 h-6"})})]}),e.jsx("div",{className:`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${a?"max-h-96 opacity-100 mt-4":"max-h-0 opacity-0"}`,children:e.jsxs("div",{className:"py-3 space-y-1 bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-100",children:[r.map(t=>{const h=t.icon,i=d.pathname===t.path;return e.jsxs(x,{to:t.path,onClick:()=>s(!1),className:`flex items-center space-x-3 px-4 py-3 mx-2 rounded-lg text-base font-medium transition-all duration-300 ${i?"bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md":"text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`,children:[e.jsx(h,{className:"w-5 h-5"}),e.jsx("span",{children:t.label})]},t.path)}),e.jsx("div",{className:"px-2 pt-2",children:e.jsx("button",{className:"w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all duration-300",children:"Get Started"})})]})})]})})};export{j as M,C as N,N as U,c,L as n};
