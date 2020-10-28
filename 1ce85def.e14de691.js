(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(6),o=(n(0),n(93)),i={title:"RPC nodes",author:"Roxane Letourneau"},c={unversionedId:"rpc_nodes",id:"rpc_nodes",isDocsHomePage:!1,title:"RPC nodes",description:"What to consider when choosing a node",source:"@site/../docs/rpc_nodes.md",slug:"/rpc_nodes",permalink:"/docs/rpc_nodes",version:"current",sidebar:"docs",previous:{title:"RPC Package",permalink:"/docs/rpc_package"},next:{title:"In Memory Signer",permalink:"/docs/inmemory_signer"}},s=[{value:"What to consider when choosing a node",id:"what-to-consider-when-choosing-a-node",children:[]},{value:"List of community-run nodes",id:"list-of-community-run-nodes",children:[]},{value:"How to run a node",id:"how-to-run-a-node",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-to-consider-when-choosing-a-node"},"What to consider when choosing a node"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Trust"),": Choose a node that you can trust the people who operate it.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"It should not alter your requests, for example, changing the operation data before forging it."),Object(o.b)("li",{parentName:"ul"},"It should not censor your operations; you want to make sure that your transactions will be broadcasted to the network."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Disponibility"),": You might want to choose a node with some mechanisms to guarantee reasonable uptime for your use cases."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Endpoints support"),": Depending on your use cases, you want the required endpoints to be exposed by the node you chose. We wrote ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/rpc_nodes_integration_test"}),"integration tests")," to show what methods in the taquito RPC package, which maps to the RPC endpoints, work on which nodes of the following section. These tests can be found here: integration-tests/rpc-nodes.spec.ts."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Reliable"),": You want a node that is in sync with the rest of the network, for example, you don't want a node that is always five blocks behind."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Maintenance/support"),": You might want to choose a node that is kept to date and that you can contact the support team if you need assistance in case of trouble.")),Object(o.b)("h2",{id:"list-of-community-run-nodes"},"List of community-run nodes"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"If a public node is missing, or information is inaccurate, please help us by submitting a pull request on our GitHub page.")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Tezos Giga Node from Tezos Ukraine",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Mainnet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://mainnet-tezos.giganode.io"}),"https://mainnet-tezos.giganode.io")),Object(o.b)("li",{parentName:"ul"},"Carthage testnet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://testnet-tezos.giganode.io"}),"https://testnet-tezos.giganode.io")," "),Object(o.b)("li",{parentName:"ul"},"Delphinet testnet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://delphinet-tezos.giganode.io"}),"https://delphinet-tezos.giganode.io")),Object(o.b)("li",{parentName:"ul"},"Labnet testnet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://labnet-tezos.giganode.io"}),"https://labnet-tezos.giganode.io")))),Object(o.b)("li",{parentName:"ul"},"SmartPy nodes",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Mainnet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://mainnet.smartpy.io"}),"https://mainnet.smartpy.io")),Object(o.b)("li",{parentName:"ul"},"Zeronet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://zeronet.smartpy.io"}),"https://zeronet.smartpy.io")),Object(o.b)("li",{parentName:"ul"},"Carthagenet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://carthagenet.smartpy.io"}),"https://carthagenet.smartpy.io")),Object(o.b)("li",{parentName:"ul"},"Delphinet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://delphinet.smartpy.io"}),"https://delphinet.smartpy.io")),Object(o.b)("li",{parentName:"ul"},"Dalphanet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://dalphanet.smartpy.io"}),"https://dalphanet.smartpy.io")))),Object(o.b)("li",{parentName:"ul"},"Nodes operated by Blockscale on behalf of the Tezos Foundation: ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Mainnet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://rpc.tzbeta.net/"}),"https://rpc.tzbeta.net/")),Object(o.b)("li",{parentName:"ul"},"Current protocol/version testnet (Carthagenet): ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://rpctest.tzbeta.net/"}),"https://rpctest.tzbeta.net/")),Object(o.b)("li",{parentName:"ul"},"Next protocol/version testnet (Delphinet): ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://rpczero.tzbeta.net/"}),"https://rpczero.tzbeta.net/")))),Object(o.b)("li",{parentName:"ul"},"Ecad Labs nodes:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Mainnet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tez.ie/rpc/mainnet"}),"https://api.tez.ie/rpc/mainnet")),Object(o.b)("li",{parentName:"ul"},"Carthagenet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tez.ie/rpc/carthagenet"}),"https://api.tez.ie/rpc/carthagenet")),Object(o.b)("li",{parentName:"ul"},"Delphinet: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://api.tez.ie/rpc/delphinet"}),"https://api.tez.ie/rpc/delphinet"))))),Object(o.b)("h2",{id:"how-to-run-a-node"},"How to run a node"),Object(o.b)("p",null,"Running a node is a good way of contributing to Tezos by increasing the decentralization of the network."),Object(o.b)("p",null,"There are many ways to set up a node, here are some links providing general instructions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://tezos.gitlab.io/introduction/howtoget.html#docker-images"}),"Use docker images")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://tezos.gitlab.io/introduction/howtoget.html#docker-images"}),"Build from sources")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ecadlabs/ansible-role-tezos-node/blob/master/README.md"}),"Use Ansible Role"))))}l.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),h=a,m=b["".concat(i,".").concat(h)]||b[h]||u[h]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);