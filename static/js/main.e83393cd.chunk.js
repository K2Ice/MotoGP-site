(this["webpackJsonpmotogp_strona_v0.2"]=this["webpackJsonpmotogp_strona_v0.2"]||[]).push([[0],{26:function(e,a,n){},27:function(e,a,n){},29:function(e,a,n){},35:function(e,a,n){},36:function(e,a,n){},37:function(e,a,n){},38:function(e,a,n){},39:function(e,a,n){},40:function(e,a,n){},41:function(e,a,n){"use strict";n.r(a);var t=n(1),i=n.n(t),c=n(16),r=n.n(c),o=(n(26),n(17)),s=n(18),l=n(21),d=n(20),m=n(8),j=n(2),u=n(6),p=n.n(u),b=(n(27),n(0)),h=function(){return Object(b.jsxs)("footer",{children:[Object(b.jsx)("p",{children:"\xa9 All rights reserved"}),Object(b.jsx)("p",{children:"Designed & Created by Konrad Korzeniewski"})]})},x=(n(29),n.p+"static/media/motogp_riders.c7401672.jpg"),y=n.p+"static/media/motogp_riders1.2e89f922.jpg",O=n.p+"static/media/motogp_riders2.012fe5f7.jpg",g=0,f=[x,y,O],v=function(e){var a=function(){document.querySelector(".headPic img").src=f[g],++g>f.length-1&&(g=0)};return Object(t.useEffect)((function(){var e=setInterval(a,5e3);return function(){return clearInterval(e)}}),[]),Object(b.jsxs)("header",{class:"headPic",children:[Object(b.jsx)("img",{src:x,alt:"motoGP"}),Object(b.jsx)("div",{class:"layer"}),Object(b.jsx)(m.b,{to:"/",children:Object(b.jsx)("h1",{children:"Moto GP"})})]})},T=(n(35),function(e){var a=e.race;return Object(b.jsxs)("div",{className:"race",children:[Object(b.jsx)("p",{children:a.race}),Object(b.jsx)("p",{children:a.track})]})}),P=function(e){var a=e.data,n=1,t=a.races.map((function(e){return Object(b.jsx)(T,{race:e},n++)}));return Object(b.jsxs)("div",{className:"races",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("p",{children:"Wy\u015bcig"}),Object(b.jsx)("p",{children:"Tor"})]}),t]})},k=(n(36),function(e){var a=e.data.riders.sort((function(e,a){var n=e.points,t=a.points;return n-t>0?-1:n-t<0?1:void 0}));return a=a.map((function(e,a){return Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{className:"position",children:++a}),Object(b.jsx)("span",{children:e.name}),Object(b.jsx)("span",{children:e.motocycle}),Object(b.jsx)("span",{children:e.nationality}),Object(b.jsx)("span",{className:"points",children:e.points})]},"rd".concat(e.id))})),Object(b.jsxs)("div",{className:"ranking",children:[Object(b.jsxs)("div",{className:"upBar",children:[Object(b.jsx)("span",{children:"Pozycja"}),Object(b.jsx)("span",{children:"Zawodnik"}),Object(b.jsx)("span",{children:"Motocykl"}),Object(b.jsx)("span",{children:"Narodowo\u015b\u0107"}),Object(b.jsx)("span",{children:"Punkty"})]}),Object(b.jsx)("ul",{children:a})]})}),A=(n(37),function(e){var a=e.rider;return Object(b.jsxs)("div",{className:"rider",children:[Object(b.jsx)("h1",{children:a.name}),Object(b.jsx)("p",{children:a.team}),Object(b.jsx)("div",{className:"riderPhoto",children:Object(b.jsx)("img",{className:"riderImage",src:"./pic/riders/".concat(a.name.toLowerCase().replace(/\s/g,"").replace("\xf1","n"),".png"),alt:a.name})})]})}),M=(n(38),function(e){var a=e.changeState,n=e.chosenTeam,i=e.data,c=i.riders.filter((function(e){return"all"===n||n===e.team?e:void 0}));c=c.map((function(e){return Object(b.jsx)(A,{rider:e},e.id)}));var r=[],o=111,s=i.riders.map((function(e){if(!r.includes(e.team))return r.push(e.team),Object(b.jsx)("option",{num:o++,value:e.team,children:e.team},o++)}));return Object(t.useEffect)((function(){return a(!0),function(){a(!1)}}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"teamSelect",children:[Object(b.jsx)("label",{children:"Zawodnicy wedle zespo\u0142\xf3w:"}),Object(b.jsxs)("select",{onChange:e.change,children:[Object(b.jsx)("option",{value:"all",children:"Wszyscy"}),s]})]}),Object(b.jsx)("div",{className:"riders",children:c})]})}),R=(n(39),function(){return Object(b.jsx)("nav",{class:"mainNav",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{to:"/riders",children:"Zawodnicy"})}),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{to:"/teams",children:"Zespo\u0142y"})}),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{to:"/races",children:"Wy\u015bcigi"})}),Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{to:"/rank",children:"Ranking"})})]})})}),S=(n(40),n.p+"static/media/motorcycle_icon.584e5ebf.png"),N=function(e){Object(l.a)(n,e);var a=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return(e=a.call.apply(a,[this].concat(i))).state={chosenTeam:"all",mainStyle:!1,ridersMounted:!0},e.handleTeamChoice=function(a){var n=a.target.value;e.setState({chosenTeam:n})},e.handleRidersState=function(a){a?e.setState({ridersMounted:a}):e.setState({chosenTeam:"all",ridersMounted:a})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=p()(".headPic"),a=p()(".mainNav"),n=!0;p()(document).on("scroll",(function(){var t=p()(document).scrollTop();t>=e.height()&&n?(a.css({position:"fixed",top:0,left:"50%",zIndex:"10",transform:"translateX(-50%)",borderRadius:"20px",border:"1px solid black",overflow:"hidden"}),p()(".mainNav a").css({padding:"10px 20px"}),n=!n):t<=e.height()&&!n&&(a.css({position:"static",top:"auto",left:"auto",transform:"none",border:"1px solid black",borderRadius:"0px"}),p()(document).width()>430?p()(".mainNav a").css({padding:"20px 30px"}):p()(".mainNav a").css({padding:"10"}),n=!n)})),p()(".mainNav a").on("click",(function(){p()("main").offset().top+50<p()(document).scrollTop()&&p()(document).scrollTop(0)}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(m.a,{basename:"/MotoGP-site",children:[Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(j.a,{path:"/",component:v}),Object(b.jsx)(j.a,{path:"/",render:R}),Object(b.jsx)("main",{children:Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",render:function(){return Object(b.jsx)("img",{className:"icon",src:S,alt:"moto_icon"})}}),Object(b.jsx)(j.a,{path:"/riders",render:function(){return Object(b.jsx)(M,{changeState:e.handleRidersState,change:e.handleTeamChoice,chosenTeam:e.state.chosenTeam,data:e.props.data})}}),Object(b.jsx)(j.a,{path:"/races",render:function(){return Object(b.jsx)(P,{data:e.props.data})}}),Object(b.jsx)(j.a,{path:"/rank",render:function(){return Object(b.jsx)(k,{data:e.props.data})}}),Object(b.jsx)(j.a,{render:function(){return Object(b.jsx)("h1",{style:{textAlign:"center",marginTop:40},children:"Nie znaleziono strony o podanym adresie"})}})]})})]}),Object(b.jsx)(h,{})]})}}]),n}(i.a.Component);r.a.render(Object(b.jsx)(N,{data:{riders:[{id:0,name:"Valentino Rossi",number:46,team:"Petronas Yamaha SRT",points:15,nationality:"ITA",motocycle:"Yamaha"},{id:1,name:"Franco Morbidelli",number:21,team:"Petronas Yamaha SRT",points:40,nationality:"ITA",motocycle:"Yamaha"},{id:2,name:"Lorenzo Savadori",number:32,team:"Aprilia Racing Team Gresini",points:4,nationality:"ITA",motocycle:"Aprilia"},{id:3,name:"Aleix Espargaro",number:41,team:"Aprilia Racing Team Gresini",points:44,nationality:"SPA",motocycle:"Aprilia"},{id:4,name:"Jack Miller",number:43,team:"Ducati Lenovo Team",points:90,nationality:"AUS",motocycle:"Ducati"},{id:5,name:"Francesco Bagnaia",number:63,team:"Ducati Lenovo Team",points:88,nationality:"ITA",motocycle:"Ducati"},{id:6,name:"Takaaki Nakagami",number:30,team:"LCR Honda",points:31,nationality:"JPN",motocycle:"Honda"},{id:7,name:"Alex Marquez",number:73,team:"LCR Honda",points:25,nationality:"SPA",motocycle:"Honda"},{id:8,name:"Maverick Vi\xf1ales",number:12,team:"Monster Energy Yamaha MotoGP",points:75,nationality:"SPA",motocycle:"Yamaha"},{id:9,name:"Fabio Quartararo",number:20,team:"Monster Energy Yamaha MotoGP",points:115,nationality:"FRA",motocycle:"Yamaha"},{id:10,name:"Johann Zarco",number:5,team:"Pramac Racing",points:101,nationality:"FRA",motocycle:"Ducati"},{id:11,name:"Michele Pirro",number:51,team:"Pramac Racing",points:3,nationality:"ITA",motocycle:"Ducati"},{id:12,name:"Jorge Martin",number:89,team:"Pramac Racing",points:19,nationality:"SPA",motocycle:"Ducati"},{id:13,name:"Brad Binder",number:33,team:"Red Bull KTM Factory Racing",points:43,nationality:"RSA",motocycle:"KTM"},{id:14,name:"Miguel Oliveira",number:88,team:"Red Bull KTM Factory Racing",points:54,nationality:"POR",motocycle:"KTM"},{id:15,name:"Pol Espargaro",number:44,team:"Repsol Honda Team",points:29,nationality:"SPA",motocycle:"Honda"},{id:16,name:"Marc Marquez",number:93,team:"Repsol Honda Team",points:16,nationality:"SPA",motocycle:"Honda"},{id:17,name:"Luca Marini",number:10,team:"Sky VR46 Avintia",points:13,nationality:"ITA",motocycle:"Ducati"},{id:18,name:"Enea Bastianini",number:23,team:"Sky VR46 Avintia",points:26,nationality:"ITA",motocycle:"Ducati"},{id:19,name:"Joan Mir",number:36,team:"Team SUZUKI ECSTAR",points:78,nationality:"SPA",motocycle:"Suzuki"},{id:20,name:"Alex Rins",number:42,team:"Team SUZUKI ECSTAR",points:23,nationality:"SPA",motocycle:"Suzuki"},{id:21,name:"Danilo Petrucci",number:9,team:"Tech 3 KTM Factory Racing",points:23,nationality:"ITA",motocycle:"KTM"},{id:22,name:"Iker Lecuona",number:27,team:"Tech 3 KTM Factory Racing",points:13,nationality:"ITA",motocycle:"KTM"}],races:[{race:"GP Kataru",track:"Losail"},{race:"GP Dauhy (Katar)",track:"Losail"},{race:"GP Portugalii",track:"Portimao"},{race:"GP Hiszpanii",track:"Jerez de la Frontera"},{race:"GP Francji",track:"Le Mans"},{race:"GP W\u0142och",track:"Mugello"},{race:"GP Katalonii (Hiszpania)",track:"Circuit de Barcelona-Catalunya"},{race:"GP Niemiec",track:"Sachsenring"},{race:"Assen TT (Holandia)",track:"Assen"},{race:"GP Finlandii",track:"Kymi Ring"},{race:"GP Austrii",track:"Red Bull Ring"},{race:"GP Wielkiej Brytanii",track:"Silverstone"},{race:"GP Aragonii (Hiszpania)",track:"Motorland Aragon"},{race:"GP San Marino",track:"Misano"},{race:"GP Japonii",track:"Motegi"},{race:"GP Tajlandii",track:"Buriram"},{race:"Assen TT (Holandia)",track:"Assen"},{race:"GP Australii",track:"Philip Island"},{race:"GP Walencji (Hiszpania)",track:"Walencia"},{race:"Assen TT (Holandia)",track:"Assen"}]}}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e83393cd.chunk.js.map