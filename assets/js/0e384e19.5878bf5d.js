"use strict";(self.webpackChunkwarehouse_docs=self.webpackChunkwarehouse_docs||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?o.createElement(y,a(a({ref:t},u),{},{components:r})):o.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={title:"Introduction",sidebar_position:1},a="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Welcome to Warehouse! An asset library flexible enough to store any kind of assets, from images and videos to DCC scenes and code snippets.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/warehouse_docs/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting Started",permalink:"/warehouse_docs/docs/getting_started"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Welcome to Warehouse! An asset library flexible enough to store any kind of assets, from images and videos to DCC scenes and code snippets."),(0,n.kt)("p",null,"The primary purpose of the library is to store files, as well as allow for quick discovery and previewing of them.",(0,n.kt)("br",null),"\nIf you don't work with Volt you are able to copy filepaths and use them as is in your apps.",(0,n.kt)("br",null),"\nIf you do use Volt however you will need to either ingest Warehouse files into your Volt workarea or copy them to your workarea's external files directory. You can find more information about this process in the ingest section."),(0,n.kt)("p",null,"Warehouse stores assets in a flat hierarchy and categorises them dynamically based on rules. As such it is not advised to browse the file system directly but rather use the UI."),(0,n.kt)("p",null,"Feel free to reach out (@george) for any questions or assistance, or to provide feedback and report issues."))}d.isMDXComponent=!0}}]);