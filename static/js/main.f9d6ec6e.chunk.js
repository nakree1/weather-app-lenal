(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/SpinnerGear.fcfd8ea4.svg"},44:function(e,t,a){e.exports=a(77)},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(40),o=a.n(r),s=a(19),i=a(12),l=a(43),u=a(26),d=a(7),f=a(8),m=a(10),p=a(9),b=a(11),h=a(25),O=a.n(h);function v(e){var t;switch(e.state){case"sn":t="far fa-snowflake";break;case"sl":t="fas fa-smog";break;case"h":t="fas fa-cloud-meatball";break;case"t":t="fas fa-bolt";break;case"hr":case"lr":t="fas fa-cloud-showers-heavy";break;case"s":t="fas fa-cloud-sun-rain";break;case"hc":t="fas fa-cloud";break;case"lc":t="fas fa-cloud-sun";break;case"c":t="fas fa-sun"}return c.a.createElement("div",{className:"icon_wrap"},c.a.createElement("i",{className:t}))}var E=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).handleSelect=function(){a.props.selectCurrentDate(a.props.data.applicable_date)},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.applicable_date,a=e.weather_state_name,n=e.weather_state_abbr,r=e.the_temp,o=e.wind_speed,s=this.props.isActive,i=O()(t,"YYYY-MM-DD");return c.a.createElement("div",{className:"forecast__day ".concat(s?"active":""),onClick:this.handleSelect},c.a.createElement("div",{className:"forecast__item forecast__item_header"},i.format("dddd")),c.a.createElement("div",{className:"forecast__item"},c.a.createElement("div",{className:"icon_wrap"},c.a.createElement("i",{className:"far fa-calendar-alt"})),c.a.createElement("span",{className:"forecast__content"},i.format("MMM D"))),c.a.createElement("div",{className:"forecast__item"},c.a.createElement(v,{state:n}),c.a.createElement("span",{className:"forecast__content"},a)),c.a.createElement("div",{className:"forecast__item"},c.a.createElement("div",{className:"icon_wrap"},c.a.createElement("i",{className:"fas fa-thermometer-half"})),c.a.createElement("span",{className:"forecast__content"},r.toFixed()," \xb0C")),c.a.createElement("div",{className:"forecast__item"},c.a.createElement("div",{className:"icon_wrap"},c.a.createElement("i",{className:"fas fa-wind"})),c.a.createElement("span",{className:"forecast__content"},o.toFixed(1)," mph")))}}]),t}(c.a.Component),j=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentDate,a=e.data;if(!t)return null;var n=a.find(function(e){return e.applicable_date===t}),r=O()(t,"YYYY-MM-DD");return c.a.createElement("div",{className:"forecast__details"},c.a.createElement("div",{className:"forecast__block forecast__block-column"},c.a.createElement("div",{className:"forecast__block-day"},r.format("dddd")),c.a.createElement("div",{className:"forecast__block-date"},r.format("MMMM D, YYYY"))),c.a.createElement("div",{className:"forecast__block forecast__block-column"},c.a.createElement("div",{className:"forecast__block-temp"},"Max: ",n.max_temp.toFixed(1)," \xb0C"),c.a.createElement("div",{className:"forecast__block-temp"},"Min: ",n.min_temp.toFixed(1)," \xb0C"),c.a.createElement("div",{className:"forecast__block-temp"},"Wind: ",n.wind_speed.toFixed(1)," mph"),c.a.createElement("div",{className:"forecast__block-humidity"},"Humidity: ",n.humidity.toFixed(1)," %")),c.a.createElement("div",{className:"forecast__block forecast__block-column"},c.a.createElement("div",{className:"forecast__block-state"},c.a.createElement("div",{className:"forecast__block-current_temp"},n.the_temp.toFixed(1)," \xb0C",c.a.createElement("br",null),n.weather_state_name),c.a.createElement(v,{state:n.weather_state_abbr}))))}}]),t}(c.a.Component),_=a(31),y=a.n(_);function N(e){var t=e.height,a=void 0===t?100:t;return c.a.createElement("div",{className:"preloader"},c.a.createElement("img",{src:y.a,style:{height:"".concat(a,"px")},alt:"Loading..."}))}function g(e){var t=e.height,a=void 0===t?100:t;return c.a.createElement("img",{src:y.a,style:{height:"".concat(a,"px")},alt:"Loading..."})}var w=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.status,n=e.selectCurrentDate,r=e.currentDate;if("request"===a)return c.a.createElement(N,null);if("success"!==a)return null;var o=t.map(function(e){return c.a.createElement(E,{data:e,key:e.id,selectCurrentDate:n,isActive:r===e.applicable_date})});return c.a.createElement("div",{className:"forecast animated faster fadeIn"},c.a.createElement("div",{className:"forecast__week"},o),c.a.createElement(j,{currentDate:r,data:t}))}}]),t}(c.a.Component),k=a(13),x=Object(k.a)("CURRENT_DATE_SELECT"),S=Object(s.b)(function(e){return{data:e.forecast.data,status:e.forecast.status,currentDate:e.currentDate}},{selectCurrentDate:x})(w),C=a(5),L=a.n(C),D=a(3),R=a(27),I=a.n(R),T="https://cors-anywhere.herokuapp.com/https://www.metaweather.com",F={getLocationByQuery:function(e){return I.a.get("".concat(T,"/api/location/search/?query=").concat(e))},getLocationByCoords:function(e){var t=e.lat,a=e.lng;return I.a.get("".concat(T,"/api/location/search/?lattlong=").concat(t,",").concat(a))},getForecastByCityId:function(e){return I.a.get("".concat(T,"/api/location/").concat(e,"/"))}},G=L.a.mark(Y),U=L.a.mark(H),A=L.a.mark(J),q=Object(k.a)("SEARCH_HINTS_FETCH"),M=Object(k.a)("CURRENT_LOCATION_FETCH"),B=Object(k.a)("LOCATION_SELECT");function Y(e){var t,a;return L.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.payload,n.next=3,Object(D.d)(q.request());case 3:return n.next=5,Object(D.b)(u.b,300);case 5:return n.prev=5,n.next=8,Object(D.b)(function(){return F.getLocationByQuery(decodeURI(t))});case 8:if(200!==(a=n.sent).status){n.next=14;break}return n.next=12,Object(D.d)(q.success(a.data.slice(0,6)));case 12:n.next=16;break;case 14:return n.next=16,Object(D.d)(q.failure());case 16:n.next=23;break;case 18:return n.prev=18,n.t0=n.catch(5),n.next=22,Object(D.d)(q.failure());case 22:console.error(n.t0);case 23:case"end":return n.stop()}},G,this,[[5,18]])}function H(e){var t,a,n;return L.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.next=3,Object(D.d)(M.request());case 3:return c.prev=3,c.next=6,Object(D.b)(function(){return F.getLocationByCoords(t)});case 6:if(a=c.sent,n=a.data[0],200!==a.status||!n){c.next=13;break}return c.next=11,Object(D.d)(M.success({id:n.woeid,title:n.title}));case 11:c.next=15;break;case 13:return c.next=15,Object(D.d)(M.failure());case 15:c.next=22;break;case 17:return c.prev=17,c.t0=c.catch(3),c.next=21,Object(D.d)(q.failure());case 21:console.error(c.t0);case 22:case"end":return c.stop()}},U,this,[[3,17]])}function J(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([Object(D.h)(q.TRIGGER,Y),Object(D.h)(M.TRIGGER,H)]);case 2:case"end":return e.stop()}},A,this)}var K=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={showDropdown:!1},a.openDropdown=function(){a.state.showDropdown||(a.setState({showDropdown:!0}),document.addEventListener("click",a.closeDropdown))},a.closeDropdown=function(e){try{var t=e.target.dataset,n=t.id,c=t.title;e.target.classList.contains("dropdown__item")&&n&&c&&(a.props.selectLocation({id:n,title:c}),a.props.clearHints())}catch(r){console.error(r)}finally{a.setState({showDropdown:!1}),document.removeEventListener("click",a.closeDropdown)}},a.selectByKey=function(e){var t=a.props.hints;"Enter"===e.key&&t.length&&(a.props.selectLocation({id:t[0].woeid,title:t[0].title}),a.props.clearHints())},a.getLocation=function(e){var t=e.currentTarget;a.props.fetchSearchHints(t.value),a.openDropdown()},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){var e;localStorage.getItem("location")?this.props.selectLocation(JSON.parse(localStorage.getItem("location"))):(e=this.props.fetchCurrentLocation,"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(function(t){var a=t.coords;console.log(a),e({lat:a.latitude,lng:a.longitude})},function(){console.error("Geo permission denied")}))}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.hints,n=t.query,c=t.status;e.query!==n&&a.length&&"success"===c&&this.setState({showDropdown:!0})}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.closeDropdown)}},{key:"render",value:function(){var e=this.state.showDropdown,t=this.props,a=t.hints,n=t.query,r=t.status,o=a.map(function(e){return c.a.createElement("li",{className:"dropdown__item",key:e.woeid,"data-title":e.title,"data-id":e.woeid},e.title)});return c.a.createElement("div",{className:"location"},c.a.createElement("div",{className:"dropdown"},c.a.createElement("input",{type:"text",className:"dropdown__input",onChange:this.getLocation,onClick:this.openDropdown,onKeyPress:this.selectByKey,value:n,placeholder:"Start typing..."}),"request"===r?c.a.createElement("div",{className:"dropdown-preloader"},c.a.createElement(g,{height:25})):null,c.a.createElement("ul",{className:"dropdown__list animated faster fadeIn ".concat(a.length&&e?"active":"")},a.length&&o)))}}]),t}(c.a.Component),Q=q.fulfill,W=Object(s.b)(function(e){return{status:e.location.search.status,query:e.location.search.query,hints:e.location.search.hints,currentLocation:e.location.currentLocation}},{fetchSearchHints:q,fetchCurrentLocation:M,clearHints:Q,selectLocation:B,selectCurrentDate:x})(K),P=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).addNote=function(){var e=a.input.current.value;e&&(a.props.createNote({date:a.props.currentDate,title:e}),a.input.current.value="")},a.saveByKey=function(e){"Enter"===e.key&&a.addNote()},a.input=c.a.createRef(),a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"notes__item notes__item-container"},c.a.createElement("input",{type:"text",className:"notes__item-input",ref:this.input,onKeyPress:this.saveByKey}),c.a.createElement("button",{className:"notes__item-button",onClick:this.addNote},"Add"))}}]),t}(c.a.Component),V=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).state={isEditable:!1},a.toggleEdit=function(){a.setState(function(e){return{isEditable:!e.isEditable}})},a.handleSave=function(e){var t=e.currentTarget;a.props.save(t.value),a.toggleEdit()},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(e){e.selected!==this.props.selected&&this.setState({isEditable:!1})}},{key:"render",value:function(){var e=this.state.isEditable,t=this.props,a=t.data,r=t.selected;if(!r)return c.a.createElement("div",{className:"notes-text notes__text-info"},"Select note");var o=a.find(function(e){return e.id===r}).text;return c.a.createElement(n.Fragment,null,e?c.a.createElement("textarea",{className:"notes__text notes__text-input",onBlur:this.handleSave,defaultValue:o,placeholder:"Start typing..."}):c.a.createElement("div",{className:"notes__text ".concat(o.length?"":"notes__text-info"),onClick:this.toggleEdit},o||"Click to edit"))}}]),t}(c.a.Component),z=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).handleDelete=function(e){e===a.props.selected&&a.props.clearSelection(),a.props.deleteNote({id:e,date:a.props.currentDate})},a.handleSave=function(e){a.props.saveNote({date:a.props.currentDate,id:a.props.selected,text:e})},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isLoaded,n=t.data,r=t.createNote,o=t.currentDate,s=t.selectNote,i=t.selected;if(!a)return null;var l=n.map(function(t){return c.a.createElement("div",{className:"notes__item ".concat(t.id===i?"active":""),key:t.id},c.a.createElement("span",{className:"notes__item-text",onClick:function(){return s(t.id)}},t.title),c.a.createElement("div",{className:"icon_wrap",onClick:function(){return e.handleDelete(t.id)}},c.a.createElement("i",{className:"fas fa-times"})))});return c.a.createElement("div",{className:"notes animated faster fadeIn"},c.a.createElement("div",{className:"notes__sidebar"},l,c.a.createElement(P,{createNote:r,currentDate:o})),c.a.createElement("div",{className:"notes__content"},c.a.createElement(V,{data:n,selected:i,save:this.handleSave})))}}]),t}(c.a.Component),X=Object(k.a)("NOTE_SELECT"),Z=Object(k.a)("NOTE_CREATE"),$=Object(k.a)("NOTE_DELETE"),ee=Object(k.a)("NOTE_SAVE"),te=X.fulfill,ae=Object(s.b)(function(e){return{isLoaded:""!==e.currentDate,selected:e.notes.selected,data:e.notes.data[e.currentDate]||[],currentDate:e.currentDate}},{createNote:Z,deleteNote:$,saveNote:ee,selectNote:X,clearSelection:te})(z);function ne(e){var t=e.children;return c.a.createElement(n.Fragment,null,c.a.createElement("header",{className:"header"},"Weather App"),c.a.createElement("section",{className:"container"},c.a.createElement("div",{className:"content"},t)))}a(75);var ce,re,oe,se,ie,le,ue=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement(ne,null,c.a.createElement(W,null),c.a.createElement(S,null),c.a.createElement(ae,null))}}]),t}(c.a.Component),de=a(4),fe=a(78),me=Object(fe.a)((ce={},Object(de.a)(ce,q.REQUEST,function(){return"request"}),Object(de.a)(ce,q.SUCCESS,function(){return"success"}),Object(de.a)(ce,q.FAILURE,function(){return"failure"}),Object(de.a)(ce,q.FULFILL,function(){return"none"}),Object(de.a)(ce,M.REQUEST,function(){return"request"}),Object(de.a)(ce,M.SUCCESS,function(){return"success"}),Object(de.a)(ce,M.FAILURE,function(){return"failure"}),ce),"none"),pe=Object(fe.a)((re={},Object(de.a)(re,q.TRIGGER,function(){return[]}),Object(de.a)(re,q.SUCCESS,function(e,t){return t.payload}),Object(de.a)(re,q.FULFILL,function(){return[]}),re),[]),be=Object(fe.a)((oe={},Object(de.a)(oe,q.TRIGGER,function(e,t){return t.payload}),Object(de.a)(oe,B.TRIGGER,function(e,t){return t.payload.title}),Object(de.a)(oe,M.SUCCESS,function(e,t){return t.payload.title}),oe),localStorage.getItem("location")?JSON.parse(localStorage.getItem("location")).title:""),he=Object(fe.a)((se={},Object(de.a)(se,B.TRIGGER,function(e,t){var a=t.payload;return{id:a.id,title:a.title}}),Object(de.a)(se,M.SUCCESS,function(e,t){var a=t.payload;return{id:a.id,title:a.title}}),se),{id:"",title:""}),Oe=Object(i.combineReducers)({status:me,hints:pe,query:be}),ve=Object(i.combineReducers)({search:Oe,currentLocation:he}),Ee=L.a.mark(ye),je=L.a.mark(Ne),_e=Object(k.a)("FORECAST_FETCH");function ye(e){var t,a,n;return L.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.next=3,Object(D.d)(_e.request());case 3:return c.next=5,Object(D.d)(x.trigger());case 5:return c.prev=5,c.next=8,Object(D.b)(function(){return F.getForecastByCityId(t.id)});case 8:if(200!==(a=c.sent).status){c.next=17;break}return n=a.data.consolidated_weather,c.next=13,Object(D.d)(_e.success(n));case 13:return c.next=15,Object(D.d)(x.trigger(n[0].applicable_date));case 15:c.next=20;break;case 17:return console.error(a),c.next=20,Object(D.d)(_e.failure());case 20:c.next=27;break;case 22:return c.prev=22,c.t0=c.catch(5),c.next=26,Object(D.d)(_e.failure());case 26:console.error(c.t0);case 27:case"end":return c.stop()}},Ee,this,[[5,22]])}function Ne(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([Object(D.h)(B.TRIGGER,ye),Object(D.h)(M.SUCCESS,ye)]);case 2:case"end":return e.stop()}},je,this)}var ge=Object(fe.a)((ie={},Object(de.a)(ie,_e.REQUEST,function(){return"request"}),Object(de.a)(ie,_e.SUCCESS,function(){return"success"}),Object(de.a)(ie,_e.FAILURE,function(){return"failure"}),ie),"none"),we=Object(fe.a)((le={},Object(de.a)(le,_e.SUCCESS,function(e,t){return t.payload}),Object(de.a)(le,_e.FAILURE,function(){return[]}),le),[]),ke=Object(i.combineReducers)({status:ge,data:we}),xe=a(32),Se=a(23),Ce=L.a.mark(Le);function Le(){var e,t,a=arguments;return L.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e=a.length>0&&void 0!==a[0]?a[0]:1,t=e;case 2:return n.next=5,t++;case 5:n.next=2;break;case 7:case"end":return n.stop()}},Ce,this)}var De,Re,Ie,Te=function(){var e=Le(localStorage.getItem("counter")||1);return function(){var t=e.next().value;return localStorage.setItem("counter",t+1),t}}(),Fe=Object(fe.a)((De={},Object(de.a)(De,X.TRIGGER,function(e,t){return t.payload}),Object(de.a)(De,X.FULFILL,function(){return null}),Object(de.a)(De,x.TRIGGER,function(){return null}),Object(de.a)(De,x.FULFILL,function(){return null}),De),null),Ge=Object(fe.a)((Re={},Object(de.a)(Re,Z.TRIGGER,function(e,t){var a=t.payload;return e[a.date]?Object(Se.a)({},e,Object(de.a)({},a.date,[].concat(Object(xe.a)(e[a.date]),[{id:Te(),title:a.title,text:""}]))):Object(Se.a)({},e,Object(de.a)({},a.date,[{id:Te(),title:a.title,text:""}]))}),Object(de.a)(Re,$.TRIGGER,function(e,t){var a=t.payload;return e[a.date]?Object(Se.a)({},e,Object(de.a)({},a.date,e[a.date].filter(function(e){return e.id!==a.id}))):e}),Object(de.a)(Re,ee.TRIGGER,function(e,t){var a=t.payload;if(e[a.date]){var n=Object(xe.a)(e[a.date]),c=n.findIndex(function(e){return e.id===a.id});return n[c]=Object(Se.a)({},n[c],{text:a.text}),Object(Se.a)({},e,Object(de.a)({},a.date,n))}return e}),Re),JSON.parse(localStorage.getItem("notes"))||{}),Ue=Object(i.combineReducers)({selected:Fe,data:Ge}),Ae=Object(fe.a)((Ie={},Object(de.a)(Ie,x.TRIGGER,function(e,t){return t.payload}),Object(de.a)(Ie,x.FULFILL,function(){return""}),Ie),""),qe=Object(i.combineReducers)({currentDate:Ae,location:ve,forecast:ke,notes:Ue}),Me=L.a.mark(Be);function Be(){return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(D.a)([Object(D.c)(J),Object(D.c)(Ne)]);case 2:case"end":return e.stop()}},Me,this)}var Ye=Object(u.a)(),He=Object(i.createStore)(qe,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(Ye)));Ye.run(Be),He.subscribe(function(){var e=He.getState();localStorage.setItem("location",JSON.stringify(e.location.currentLocation)),localStorage.setItem("notes",JSON.stringify(e.notes.data))});o.a.render(c.a.createElement(s.a,{store:He},c.a.createElement(ue,null)),document.getElementById("root"))}},[[44,2,1]]]);
//# sourceMappingURL=main.f9d6ec6e.chunk.js.map