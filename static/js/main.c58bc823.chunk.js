(this["webpackJsonpair-pollution"]=this["webpackJsonpair-pollution"]||[]).push([[0],{81:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var i,o,r,a,s,c,d=t(0),l=t(11),u=t.n(l),h=t(6),m=t(33),f=t(10),b=t.n(f),j=t(12),g=t(16),p=t.n(g),y=function(e){return p.a.get("https://open.mapquestapi.com/geocoding/v1/address?key=".concat("H20LsGP6NC1MGqOsKA3A6McuOskn1Iqf","&inFormat=kvp&outFormat=json&&thumbMaps=false&maxResult=1&location=").concat(e))},x=function(e,n){return p.a.get("https://api.openweathermap.org/data/2.5/air_pollution?lat=".concat(e,"&lon=").concat(n,"&appid=").concat("40378e26c064ea4354dd1e2f0a5f91be"))},O={getMapGeocode:function(e){return function(){var n=Object(j.a)(b.a.mark((function n(t){var i,o,r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y(e);case 3:i=n.sent,o=i.data,r=o.results[0].locations[0],t({type:"GET_GEOCODE",geocodeData:r,latitude:r.latLng.lat,longitude:r.latLng.lng}),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()}},v={getAirPollutionData:function(e,n){return function(){var t=Object(j.a)(b.a.mark((function t(i){var o,r,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e,n);case 3:o=t.sent,r=o.data,console.log(r),a=r.list[0],i({type:"GET_AIRPOLLUTION",airData:a,aqi:a.main.aqi}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}},w=t(2),k=t(3),z=k.a.div(i||(i=Object(w.a)(["\n  text-align: center;\n  background: #faffe5;\n  padding: 10rem 0;\n  @media only screen and (max-width: 600px) {\n    padding: 5rem 0;\n  }\n"]))),A=k.a.h1(o||(o=Object(w.a)(["\n  font-size: 4rem;\n  margin-bottom: 4rem;\n  @media only screen and (max-width: 600px) {\n    font-size: 3rem;\n  }\n"]))),D=k.a.div(r||(r=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]))),T=k.a.div(a||(a=Object(w.a)(["\n  height: 35rem;\n  width: 40rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);\n  margin: 1rem;\n  background: #fff;\n\n  @media only screen and (max-width: 850px) {\n    width: 30rem;\n  }\n\n  @media only screen and (max-width: 600px) {\n    width: 30rem;\n    height: auto;\n  }\n"]))),E=k.a.div(s||(s=Object(w.a)(["\n  font-size: 2.5rem;\n  text-align: center;\n  font-weight: 600;\n  color: #06160e;\n  padding: 1rem 0;\n\n  @media only screen and (max-width: 600px) {\n    font-size: 2rem;\n  }\n"]))),G=k.a.p(c||(c=Object(w.a)(["\n  font-size: 2rem;\n  text-align: left;\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n\n  @media only screen and (max-width: 600px) {\n    font-size: 1.7rem;\n  }\n"]))),I=t(1);var q,C,S=function(e){var n=e.AQI;return Object(I.jsxs)(z,{children:[Object(I.jsx)(A,{children:"Recommendations"}),Object(I.jsxs)(D,{children:[Object(I.jsxs)(T,{children:[Object(I.jsx)(E,{children:"General"}),Object(I.jsx)("hr",{}),Object(I.jsx)(G,{children:1===n||2===n?"With this level of air quality, you have no limitations. Enjoy the outdoors!":3===n||4===n?"Enjoy the outdoors but take care about not staying too long in the outdoors in the long-term.":"Avoid intense activities outdoors. Stay away from busy roads, construction sites, open fires, and other sources of smoke. Staying indoors with an activated air filtration system would be best for your long-term health."})]}),Object(I.jsxs)(T,{children:[Object(I.jsx)(E,{children:"Asthma"}),Object(I.jsx)("hr",{}),Object(I.jsx)(G,{children:1===n||2===n?"If you start to feel respiratory discomforts such as coughing or breathing difficulties, consider reducing the intensity of your outdoor activities. Try to limit the time you spend near busy roads, industrial emission stacks, open fires, and other sources of smoke.":3===n||4===n?" If you start to feel respiratory discomforts such as coughing or breathing difficulties, consider reducing the intensity of your outdoor activities. Try to limit the time you spend near busy roads, industrial emission stacks, open fires, and other sources of smoke.":"The current level of air quality is likely to affect your health. As a precaution, keep relevant medication(s) available. You are advised to avoid intense activities outdoors and stay away from sources of pollution, such as busy roads, open fires, and industrial sites. Staying indoors with an activated air filtration system would be best for your long-term health."})]})]}),Object(I.jsxs)(D,{children:[Object(I.jsxs)(T,{children:[Object(I.jsx)(E,{children:"Children"}),Object(I.jsx)("hr",{}),Object(I.jsx)(G,{children:1===n||2===n?"If you start to feel respiratory discomforts such as coughing or breathing difficulties, consider reducing the intensity of your outdoor activities. Try to limit the time you spend near busy roads, construction sites, open fires, and other sources of smoke.":3===n||4===n?" If you start to feel respiratory discomforts such as coughing or breathing difficulties, consider reducing the intensity of your outdoor activities. Try to limit the time you spend near busy roads, construction sites, open fires, and other sources of smoke.":"The current level of air quality is likely to affect your health. You are advised to avoid intense activities outdoors and stay away from sources of pollution, such as busy roads, open fires, and industrial sites. Staying indoors with an activated air filtration system would be best for your long-term health."})]}),Object(I.jsxs)(T,{children:[Object(I.jsx)(E,{children:"Pets"}),Object(I.jsx)("hr",{}),Object(I.jsx)(G,{children:1===n||2===n?"To keep your dog healthy, consider reducing the intensity of your outdoor activities. Try to limit the time you spend near busy roads, construction sites, open fires, and other sources of smoke.":3===n||4===n?"Take your dog outside but consider reducing the intensity of your outdoor activities. Try to limit the time you spend near busy roads, construction sites, open fires, and other sources of smoke.":"The current level of air quality is likely to affect your dog's health. You are advised to avoid intense activities outdoors and stay away from sources of pollution, such as busy roads, open fires, and industrial sites. Staying indoors with an activated air filtration system would be best for your dog's long-term health."})]})]})]})},_=k.a.div(q||(q=Object(w.a)(["\n  display: flex;\n  color: #fff;\n\n  @media only screen and (max-width: 1096px) {\n    flex-direction: column;\n  }\n"]))),L=k.a.div(C||(C=Object(w.a)(["\n  padding: 10rem;\n  width: 100%;\n  background: #103909;\n  display: flex;\n\n  & div {\n    margin: 0 auto;\n\n    & h1 {\n      font-size: 3.5rem;\n      margin-bottom: 2rem;\n    }\n\n    & p {\n      font-size: 1.75rem;\n    }\n\n    & h2 {\n      text-align: center;\n      width: 20rem;\n      font-size: 2rem;\n      margin: 2rem 0;\n      padding: 1rem 2rem;\n      border: 1px solid #49f400;\n    }\n  }\n\n  @media only screen and (max-width: 850px) {\n    padding: 5rem;\n\n    & div {\n      width: 100%;\n    }\n  }\n"])));var R,P,M,N=function(){return Object(I.jsxs)(_,{children:[Object(I.jsx)(L,{children:Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:"Mission"}),Object(I.jsx)("h1",{children:"Clean Air is your birthright!"}),Object(I.jsx)("p",{children:"We believe in a world where everyone breathes clean, fresh air. Air Pollution is a massive crisis. But together as Communities, we can tackle it. Join the Green Orb communities to donate and participate to make the earth green.Now is your chance to make your mark and bring about a definitive change in your own community all around the world!"})]})}),Object(I.jsx)(L,{style:{background:"#268b0f"},children:Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:"About us"}),Object(I.jsx)("h1",{children:"Communities are our Strength."}),Object(I.jsx)("p",{children:"Green Orb is an organization that brings together all the local communities all over the world to work on the mission of solving the Air pollution crisis. We are a platform for the local communities to work together with like-minded people, city planners, and subject matter experts to approach the problem in a holistic way. We guarantee that all the donations will be used for the local communities and maintain an open book for transparency and accountability."})]})})]})},B=t(13),F=k.a.div(R||(R=Object(w.a)(["\n  background: #00261c;\n  color: #fff;\n  padding: 5rem;\n  display: flex;\n  justify-content: space-around;\n\n  @media only screen and (max-width: 600px) {\n    flex-direction: column;\n  }\n"]))),U=k.a.p(P||(P=Object(w.a)(["\n  font-size: 1.5rem;\n  padding: 2rem 0;\n  & span {\n    color: #4bf83f;\n    font-size: 1.5rem;\n    font-weight: 600;\n  }\n"]))),Q=k.a.div(M||(M=Object(w.a)(["\n  & p {\n    font-size: 1.5rem;\n  }\n"])));var W,Y,J,X,H=function(){return Object(I.jsxs)(F,{children:[Object(I.jsxs)(Q,{children:[Object(I.jsx)("p",{children:"Green Orb St. 88 62382 Berlin, Germany"}),Object(I.jsx)("p",{children:"admin@greenorb.org"}),Object(I.jsx)(B.b,{size:25,style:{marginRight:"1rem"}}),Object(I.jsx)(B.a,{size:25,style:{marginRight:"1rem"}}),Object(I.jsx)(B.c,{size:25,style:{margin:"1rem 1rem 0 0"}})]}),Object(I.jsxs)(U,{children:["All rights reserved @ ",Object(I.jsx)("span",{children:"GREENORB"})," ",(new Date).getFullYear()]})]})},K=k.a.div(W||(W=Object(w.a)(["\n  min-height: 60vh;\n  background-position: center;\n  background-size: cover;\n  padding: 5rem 0;\n  border-bottom: 0.5rem solid #1c6d3b;\n  position: relative;\n"]))),V=k.a.img(Y||(Y=Object(w.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  opacity: 0.7;\n  filter: brightness(70%);\n"]))),Z=k.a.div(J||(J=Object(w.a)(["\n  margin: 0 auto;\n  text-align: center;\n  width: 50rem;\n  color: #06160e;\n  z-index: 10;\n  white-space: initial;\n  word-wrap: break-word;\n\n  & h1 {\n    font-size: 5rem;\n    margin: 1rem 0;\n  }\n  & h2 {\n    font-size: 3rem;\n  }\n  & p {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 600px) {\n    width: 30rem;\n\n    & h1 {\n      font-size: 3.5rem;\n      margin: 1rem 0;\n    }\n    & h2 {\n      font-size: 2rem;\n    }\n    & p {\n      font-size: 2rem;\n    }\n\n    & img {\n      width: 100%;\n    }\n  }\n"]))),$=k.a.input(X||(X=Object(w.a)(["\n  border-color: #1c6d3b;\n  color: #06160e;\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 5rem;\n  font-size: 2.5rem;\n\n  @media only screen and (max-width: 600px) {\n    font-size: 2rem;\n  }\n"]))),ee=t.p+"static/media/good.b272ae3b.jpg",ne=t.p+"static/media/moderate.efc26a11.jpg",te=t.p+"static/media/bad.f417fa4f.jpg",ie=t.p+"static/media/logo.18a04e0e.png";var oe,re=function(e){var n=e.geocodeData,t=(e.airData,e.AQI),i=e.city,o=e.setCity;return Object(I.jsxs)(K,{children:[Object(I.jsx)(V,{src:1===t||2===t?ee:3===t||4===t?ne:te,alt:"Logo"}),Object(I.jsxs)(Z,{children:[Object(I.jsx)("img",{src:ie,alt:"Logo"}),Object(I.jsx)($,{type:"search",placeholder:"Search city air quality...",onChange:function(e){return o(e.target.value)}}),i?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h1",{children:i.toUpperCase()}),Object(I.jsxs)("h2",{children:[n.adminArea3?n.adminArea3:i.toUpperCase(),", ",n.adminArea1]}),Object(I.jsxs)("p",{children:[1===t||2===t?"Good":3===t||4===t?"Average":"Bad"," ","air quality."]})]}):null]})]})},ae=t(31),se=t.n(ae),ce=k.a.div(oe||(oe=Object(w.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));var de=function(){return Object(I.jsx)(ce,{children:Object(I.jsx)(se.a,{type:"Circles",color:"#36bb00",height:100,width:100,timeout:5e3})})};var le=function(){var e=Object(h.b)(),n=Object(h.c)((function(e){return e.geocode.geocodeData})),t=Object(h.c)((function(e){return e.geocode.latitude})),i=Object(h.c)((function(e){return e.geocode.longitude})),o=Object(h.c)((function(e){return e.air.airData})),r=Object(h.c)((function(e){return e.air.aqi})),a=Object(d.useState)("Dusseldorf"),s=Object(m.a)(a,2),c=s[0],l=s[1];return Object(d.useEffect)((function(){setTimeout((function(){e(O.getMapGeocode(c)),e(v.getAirPollutionData(t,i))}),1e3)}),[e,c,t,i]),n&&o?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(re,{geocodeData:n,airData:o,AQI:r,city:c,setCity:l}),Object(I.jsx)(S,{AQI:r}),Object(I.jsx)(N,{}),Object(I.jsx)(H,{})]}):Object(I.jsx)(de,{})},ue=t(7),he={},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_GEOCODE":return{geocodeData:n.geocodeData,latitude:n.latitude,longitude:n.longitude};default:return e}},fe={},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_AIRPOLLUTION":return{airData:n.airData,aqi:n.aqi};default:return e}},je=Object(ue.c)({geocode:me,air:be}),ge=t(32),pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ue.d,ye=Object(ue.e)(je,pe(Object(ue.a)(ge.a)));t(80),t(81);u.a.render(Object(I.jsx)(h.a,{store:ye,children:Object(I.jsx)(le,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.c58bc823.chunk.js.map