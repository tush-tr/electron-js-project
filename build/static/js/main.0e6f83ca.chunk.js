(this["webpackJsonpwarehouses-manager"]=this["webpackJsonpwarehouses-manager"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"name":"Warehouse-165","code":"W-00001","id":1,"city":"Delhi","space_available":1234,"type":"Leasable Space","cluster":"cluster-a-32","is_registered":true,"is_live":false},{"name":"Warehouse-276","code":"W-00002","id":2,"city":"Chennai","space_available":124,"type":"Warehouse Service","cluster":"cluster-a-1","is_registered":true,"is_live":false},{"name":"Warehouse-3039","code":"W-00003","id":3,"city":"Indore","space_available":134,"type":"Warehouse Service","cluster":"cluster-a-1","is_registered":true,"is_live":false},{"name":"Warehouse-324","code":"W-00004","id":4,"city":"Chennai","space_available":12,"type":"Leasable Space","cluster":"cluster-a-21","is_registered":true,"is_live":false},{"name":"Warehouse-5454","code":"W-00005","id":5,"city":"Chennai","space_available":1243434,"type":"Warehouse Service","cluster":"cluster-a-21","is_registered":true,"is_live":false},{"name":"Warehouse-4345","code":"W-00006","id":6,"city":"Chennai","space_available":1,"type":"Leasable Space","cluster":"cluster-a-21","is_registered":true,"is_live":false},{"name":"Warehouse-3455","code":"W-00007","id":7,"city":"Mumbai","space_available":4,"type":"Leasable Space","cluster":"cluster-a-2","is_registered":true,"is_live":false},{"name":"Warehouse-23455","code":"W-00008","id":8,"city":"Bangalore","space_available":3456,"type":"Warehouse Service","cluster":"cluster-a-21","is_registered":true,"is_live":true},{"name":"Warehouse-6457","code":"W-00009","id":9,"city":"Bangalore","space_available":1234545,"type":"Warehouse Service","cluster":"cluster-a-1","is_registered":true,"is_live":false},{"name":"Warehouse-32456","code":"W-000010","id":10,"city":"Guwahati","space_available":121234,"type":"Warehouse Service","cluster":"cluster-a-1","is_registered":true,"is_live":true},{"name":"Warehouse-3245678","code":"W-000011","id":11,"city":"Delhi","space_available":98,"type":"Leasable Space","cluster":"cluster-v-2","is_registered":true,"is_live":false},{"name":"Warehouse-4567","code":"W-000012","id":12,"city":"Indore","space_available":97,"type":"Warehouse Service","cluster":"cluster-a-1","is_registered":true,"is_live":true},{"name":"Warehouse-458","code":"W-000013","id":13,"city":"Delhi","space_available":654,"type":"Leasable Space","cluster":"cluster-a-1","is_registered":true,"is_live":false}]')},,,,,,,,,function(e,a,s){},function(e,a,s){},function(e,a,s){},,function(e,a,s){},function(e,a,s){},function(e,a,s){"use strict";s.r(a);var c=s(1),t=s.n(c),r=s(8),i=s.n(r),l=(s(16),s(11)),n=(s(17),s(9)),u=s(7),o=s(2),d=(s(18),s(0)),h=function(e){var a=e.name,s=e.city,c=e.space_available,t=e.cluster;return Object(d.jsx)("div",{className:"warehouse-card",children:Object(d.jsxs)("div",{className:"ColDetail",children:[Object(d.jsx)("div",{className:"Header",children:Object(d.jsx)("div",{className:"warehouse-title",children:a})}),Object(d.jsxs)("div",{className:"warehouse-city",children:[Object(d.jsx)("i",{className:"fas fa-map-marker-alt"})," ",s]}),Object(d.jsxs)("div",{className:"warehouse-space",children:[Object(d.jsx)("b",{children:"Space Available:"}),c]}),Object(d.jsxs)("div",{className:"warehouse-cluster",children:[Object(d.jsx)("b",{children:"Cluster:"})," ",t]})]})})},p=(s(20),function(e){var a=e.warehouses;return Object(d.jsx)("div",{className:"Container",children:a.map((function(e){return Object(c.createElement)(h,Object(o.a)(Object(o.a)({},e),{},{key:e.id}))}))})}),v=s(10),b=(s(21),function(e){var a=e.onChange,s=e.placeholder;return Object(d.jsxs)("div",{className:"Search",children:[Object(d.jsx)("span",{className:"SearchSpan",children:Object(d.jsx)(v.a,{})}),Object(d.jsx)("input",{className:"SearchInput",type:"text",onChange:a,placeholder:s})]})});var j=function(){var e=Object(c.useState)(u),a=Object(l.a)(e,2),s=a[0],t=a[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Warehouses Manager"}),Object(d.jsx)(b,{placeholder:"Search",onChange:function(e){return function(e){if(e){var a=new n.a(s,{keys:["name","city"]}).search(e),c=[];a.length?(a.forEach((function(e){c.push(e.item)})),t(c)):t([])}else t(u)}(e.target.value)}}),Object(d.jsx)(p,{warehouses:s})]})},_=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,23)).then((function(a){var s=a.getCLS,c=a.getFID,t=a.getFCP,r=a.getLCP,i=a.getTTFB;s(e),c(e),t(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(t.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),_()}],[[22,1,2]]]);
//# sourceMappingURL=main.0e6f83ca.chunk.js.map