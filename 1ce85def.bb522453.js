(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),o=n(6),r=(n(0),n(91)),i={title:"RPC nodes",author:"Roxane Letourneau"},s={unversionedId:"rpc_nodes",id:"rpc_nodes",isDocsHomePage:!1,title:"RPC nodes",description:"Please be aware that version 7 of taquito introduces breaking changes related to the following classes, where it is now required to specify an RPC node in their constructor:",source:"@site/../docs/rpc_nodes.md",slug:"/rpc_nodes",permalink:"/docs/rpc_nodes",version:"current",sidebar:"docs",previous:{title:"RPC Package",permalink:"/docs/rpc_package"},next:{title:"In Memory Signer",permalink:"/docs/inmemory_signer"}},c=[{value:"What to consider when choosing a node",id:"what-to-consider-when-choosing-a-node",children:[]},{value:"List of community-run nodes",id:"list-of-community-run-nodes",children:[]},{value:"How to run a node",id:"how-to-run-a-node",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("blockquote",{parentName:"div"},Object(r.b)("p",{parentName:"blockquote"},"Please be aware that version 7 of taquito introduces breaking changes related to the following classes, where it is now required to specify an RPC node in their constructor:"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"RpcClient"),Object(r.b)("li",{parentName:"ul"},"Context  "),Object(r.b)("li",{parentName:"ul"},"TezosToolkit "))),Object(r.b)("p",{parentName:"div"},'Before version 7, Taquito was configured to use our default RPC node; the default value was set in the constructor of the RpcClient class. We took this approach so that users can get started quickly, and Taquito should "just work" with minimal fiddling. Users could import a ready to use Tezos singleton, an instance of the TezosToolkit class using the default RPC URL.    '),Object(r.b)("p",{parentName:"div"},"However, in version 7 of Taquito, we decided to remove the default RPC node. The reason behind this choice is to avoid that a lot of applications rely on our default node and thus centralize a part of the ecosystem on one node."),Object(r.b)("p",{parentName:"div"},"When creating an instance of the TezosToolkit, it is now required to specify the RPC node. The Tezos singleton has been replaced by a function taking an RPC node as a parameter. Both ways are equivalent, and the second one has been kept for users familiar with the Tezos singleton."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Change required:")),Object(r.b)("p",{parentName:"div"},Object(r.b)("del",{parentName:"p"},"const tezos = new TezosToolkit()")),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { TezosToolkit } from '@taquito/taquito';\nconst tezos = new TezosToolkit('https://YOUR_PREFERRED_RPC_URL');\n\n// or\n\nimport { Tezos } '@taquito/taquito';\nconst tezos = Tezos('https://YOUR_PREFERRED_RPC_URL');\n")),Object(r.b)("p",{parentName:"div"},"Here is an example of the compilation error you would get when updating Taquito to version 7, if the RPC URL is not specified: "),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"Type '(rpcClient: string | RpcClient) => TezosToolkit' is missing the following properties from type 'TezosToolkit': _rpc, _context, _stream, _options, and 20 more.")))),Object(r.b)("h2",{id:"what-to-consider-when-choosing-a-node"},"What to consider when choosing a node"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Trust"),": Choose a node that you can trust the people who operate it.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"It should not alter your requests, for example, changing the operation data before forging it."),Object(r.b)("li",{parentName:"ul"},"It should not censor your operations; you want to make sure that your transactions will be broadcasted to the network."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Disponibility"),": You might want to choose a node with some mechanisms to guarantee reasonable uptime for your use cases."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Endpoints support"),": Depending on your use cases, you want the required endpoints to be exposed by the node you chose. We wrote ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/rpc_nodes_integration_test"}),"integration tests")," to show what methods in the taquito RPC package, which maps to the RPC endpoints, work on which nodes of the following section. These tests can be found here: integration-tests/rpc-nodes.spec.ts."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Reliable"),": You want a node that is in sync with the rest of the network, for example, you don't want a node that is always five blocks behind."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Maintenance/support"),": You might want to choose a node that is kept to date and that you can contact the support team if you need assistance in case of trouble.")),Object(r.b)("h2",{id:"list-of-community-run-nodes"},"List of community-run nodes"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"If a public node is missing, or information is inaccurate, please help us by submitting a pull request on our GitHub page.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tezos Giga Node from Tezos Ukraine",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Mainnet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://mainnet-tezos.giganode.io"}),"https://mainnet-tezos.giganode.io")),Object(r.b)("li",{parentName:"ul"},"Carthage testnet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://testnet-tezos.giganode.io"}),"https://testnet-tezos.giganode.io")," "),Object(r.b)("li",{parentName:"ul"},"Delphinet testnet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://delphinet-tezos.giganode.io"}),"https://delphinet-tezos.giganode.io")),Object(r.b)("li",{parentName:"ul"},"Labnet testnet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://labnet-tezos.giganode.io"}),"https://labnet-tezos.giganode.io")))),Object(r.b)("li",{parentName:"ul"},"SmartPy nodes",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Mainnet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://mainnet.smartpy.io"}),"https://mainnet.smartpy.io")),Object(r.b)("li",{parentName:"ul"},"Zeronet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://zeronet.smartpy.io"}),"https://zeronet.smartpy.io")),Object(r.b)("li",{parentName:"ul"},"Carthagenet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://carthagenet.smartpy.io"}),"https://carthagenet.smartpy.io")),Object(r.b)("li",{parentName:"ul"},"Delphinet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://delphinet.smartpy.io"}),"https://delphinet.smartpy.io")),Object(r.b)("li",{parentName:"ul"},"Dalphanet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://dalphanet.smartpy.io"}),"https://dalphanet.smartpy.io")))),Object(r.b)("li",{parentName:"ul"},"Nodes operated by Blockscale on behalf of the Tezos Foundation: ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Mainnet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://rpc.tzbeta.net/"}),"https://rpc.tzbeta.net/")),Object(r.b)("li",{parentName:"ul"},"Current protocol/version testnet (Carthagenet): ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://rpctest.tzbeta.net/"}),"https://rpctest.tzbeta.net/")),Object(r.b)("li",{parentName:"ul"},"Next protocol/version testnet (Delphinet): ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://rpczero.tzbeta.net/"}),"https://rpczero.tzbeta.net/")))),Object(r.b)("li",{parentName:"ul"},"Ecad Labs nodes:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Mainnet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tez.ie/rpc/mainnet"}),"https://api.tez.ie/rpc/mainnet")),Object(r.b)("li",{parentName:"ul"},"Carthagenet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tez.ie/rpc/carthagenet"}),"https://api.tez.ie/rpc/carthagenet")),Object(r.b)("li",{parentName:"ul"},"Delphinet: ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tez.ie/rpc/delphinet"}),"https://api.tez.ie/rpc/delphinet"))))),Object(r.b)("h2",{id:"how-to-run-a-node"},"How to run a node"),Object(r.b)("p",null,"Running a node is a good way of contributing to Tezos by increasing the decentralization of the network."),Object(r.b)("p",null,"There are many ways to set up a node, here are some links providing general instructions:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://tezos.gitlab.io/introduction/howtoget.html#docker-images"}),"Use docker images")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://tezos.gitlab.io/introduction/howtoget.html#docker-images"}),"Build from sources")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ecadlabs/ansible-role-tezos-node/blob/master/README.md"}),"Use Ansible Role"))))}l.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),h=a,d=b["".concat(i,".").concat(h)]||b[h]||u[h]||r;return n?o.a.createElement(d,s(s({ref:t},p),{},{components:n})):o.a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);