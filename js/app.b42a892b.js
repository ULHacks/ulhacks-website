(function(e){function t(t){for(var o,c,s=t[0],i=t[1],l=t[2],d=0,p=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&p.push(a[c][0]),a[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(o=!1)}o&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},r=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1caa":function(e,t,n){},"4a17":function(e,t,n){},"643d":function(e,t,n){},"7aad":function(e,t,n){"use strict";n("643d")},"81b9":function(e,t,n){"use strict";n("a402")},"9b1b":function(e){e.exports=JSON.parse('{"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false},"onclick":{"enable":false},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},a359:function(e,t,n){},a402:function(e,t,n){},a766:function(e,t,n){},a8fe:function(e,t,n){"use strict";n("4a17")},a9ef:function(e,t,n){"use strict";n("a359")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("a766"),n("e829");var o=n("ecee"),a=n("f2d1"),r=n("c074"),c=n("ad3d"),s=n("f5af"),i=n.n(s),l=n("7a23"),u={class:"flex flex-col"};function d(e,t,n,o,a,r){var c=Object(l["p"])("NavigationBar"),s=Object(l["p"])("HeroBanner"),i=Object(l["p"])("IntroductionSection"),d=Object(l["p"])("SectionSeparator"),p=Object(l["p"])("QuestionsSection"),b=Object(l["p"])("SponsorsSection"),f=Object(l["p"])("OurTeamSection"),m=Object(l["p"])("ContactSection");return Object(l["j"])(),Object(l["d"])("div",u,[Object(l["e"])(c,{scrollBreakpoint:200}),Object(l["e"])(s),Object(l["e"])(i),Object(l["e"])(d),Object(l["e"])(p),Object(l["e"])(d),Object(l["e"])(b),Object(l["e"])(d),Object(l["e"])(f),Object(l["e"])(d),Object(l["e"])(m)])}var p=Object(l["v"])("data-v-2eb86c4c");Object(l["l"])("data-v-2eb86c4c");var b=Object(l["e"])("div",{class:"flex-1 flex flex-col items-center w-full"},[Object(l["e"])("div",{class:"text-6xl font-bold text-center mb-5"},"Contact Us")],-1),f={class:"flex flex-row justify-evenly p-16 flex-wrap"},m=Object(l["e"])("form",{class:"contact__form flex flex-col",action:"mailto:contact@ulhacks.com",method:"get"},[Object(l["e"])("div",{class:"text-2xl font-bold p-2"},"Questions?"),Object(l["e"])("input",{class:"border rounded p-2 m-2",type:"text",name:"subject",placeholder:"Subject"}),Object(l["e"])("textarea",{class:"border rounded p-2 m-2 h-64 resize-none",name:"body",placeholder:"Message"}),Object(l["e"])("button",{class:"border rounded p-4 m-2",type:"submit",name:"submit"},"Send")],-1),j={class:"contact__contact-details"},v=Object(l["e"])("div",{class:"text-2xl font-bold p-2 px-4"},"Keep In Touch",-1),h={class:"flex flex-row p-4"},O=Object(l["e"])("div",{class:"w-4"},null,-1),g=Object(l["e"])("div",{class:"flex flex-col"},[Object(l["e"])("a",{class:"font-bold",href:"mailto:contact@ulhacks.com"},"contact@ulhacks.com"),Object(l["e"])("p",null,"Questions are always welcome!")],-1),w={class:"flex flex-row p-4"},x=Object(l["e"])("div",{class:"w-4"},null,-1),y=Object(l["e"])("div",{class:"flex flex-col"},[Object(l["e"])("a",{class:"font-bold",href:"https://www.instagram.com/ULHacks"},"@ULHacks"),Object(l["e"])("p",null,"Follow us to stay up-to-date!")],-1);Object(l["k"])();var k=p((function(e,t,n,o,a,r){var c=Object(l["p"])("font-awesome-icon"),s=Object(l["p"])("SectionWrapper");return Object(l["j"])(),Object(l["d"])(s,{id:"contact"},{default:p((function(){return[b,Object(l["e"])("div",f,[m,Object(l["e"])("div",j,[v,Object(l["e"])("div",h,[Object(l["e"])(c,{class:"text-4xl",icon:["fas","envelope"]}),O,g]),Object(l["e"])("div",w,[Object(l["e"])(c,{class:"text-4xl",icon:["fab","instagram"]}),x,y])])])]})),_:1})})),_={class:"p-12 flex flex-row justify-center"};function S(e,t,n,o,a,r){return Object(l["j"])(),Object(l["d"])("div",_,[Object(l["e"])("div",{class:e.$attrs.class?e.$attrs.class:"max-w-7xl"},[Object(l["o"])(e.$slots,"default")],2)])}var I={name:"SectionWrapper"};I.render=S;var U=I,q={components:{SectionWrapper:U},name:"ContactSection"};n("7aad");q.render=k,q.__scopeId="data-v-2eb86c4c";var T=q,L=Object(l["v"])("data-v-6856ef15");Object(l["l"])("data-v-6856ef15");var H={class:"hero-banner__container h-screen"},C={class:"hero-banner__content flex flex-col absolute h-screen justify-center"},P=Object(l["e"])("div",{class:"text-7xl text-center font-black"},"ULHacks 2021",-1),W=Object(l["e"])("div",{class:"h-8"},null,-1),M={class:"flex flex-row flex-wrap justify-evenly"},A={class:"flex flex-row align-middle"},D=Object(l["e"])("div",{class:"w-2"},null,-1),z=Object(l["e"])("div",{class:"text-lg font-bold leading-loose"},"Virtual",-1),B={class:"flex flex-row align-middle"},E=Object(l["e"])("div",{class:"w-2"},null,-1),Q=Object(l["e"])("div",{class:"text-lg font-bold leading-loose"},"August 13th - 15th, 2021",-1),K=Object(l["e"])("div",{class:"flex flex-row justify-center items-center h-32 text-xl"},[Object(l["e"])("a",{href:"https://ulhacks.devpost.com/"},"Devpost")],-1),N=Object(l["e"])("div",{class:"hero-banner__particles h-screen",id:"particles-js"},null,-1);Object(l["k"])();var J=L((function(e,t,n,o,a,r){var c=Object(l["p"])("location-marker-icon"),s=Object(l["p"])("calendar-icon");return Object(l["j"])(),Object(l["d"])("div",H,[Object(l["e"])("div",C,[P,W,Object(l["e"])("div",M,[Object(l["e"])("div",A,[Object(l["e"])(c,{class:"h-8 w-8"}),D,z]),Object(l["e"])("div",B,[Object(l["e"])(s,{class:"h-8 w-8"}),E,Q])]),K]),N])})),V=(n("572f"),n("fd7f")),F=n("9b1b"),G={name:"TheHeroBanner.vue",components:{LocationMarkerIcon:V["b"],CalendarIcon:V["a"]},setup:function(){return Object(l["h"])((function(){window.particlesJS("particles-js",F)})),{}}};n("a9ef");G.render=J,G.__scopeId="data-v-6856ef15";var R=G,$=n("cf05"),X=n.n($),Y={class:"flex flex-col md:flex-row"},Z=Object(l["e"])("img",{class:"mb-12 w-60 max-w-sm self-center flex-1 md:mb-0 md:mr-16","data-aos":"fade-right",src:X.a},null,-1),ee={class:"flex-1","data-aos":"fade-left"},te=Object(l["e"])("div",{class:"px-12 pb-3 text-3xl font-bold text-center"},"Introducing ULHacks",-1);function ne(e,t,n,o,a,r){var c=Object(l["p"])("SectionWrapper");return Object(l["j"])(),Object(l["d"])(c,{id:"introduction"},{default:Object(l["t"])((function(){return[Object(l["e"])("div",Y,[Z,Object(l["e"])("div",ee,[te,Object(l["e"])("div",{class:"whitespace-pre-wrap",textContent:Object(l["q"])(o.ulHacksDescription)},null,8,["textContent"])])])]})),_:1})}var oe,ae=n("8785"),re=n("0566"),ce=Object(re["a"])(oe||(oe=Object(ae["a"])(["\n\tAt ULHacks, you have 36 hours to create a project which empowers learning.\n\n\tWe believe that learning is an invaluable skill. No matter your career or your field, the rapid innovation over the past few decades have demonstrated the need to adapt your skills to ever-changing technology—or they risk falling obsolete.\n\n\tThe secret to evolving your skills for the modern age lies in perfecting the foundational skill of learning, which has never been more crucial to a successful future. \n\n\tLuckily, technology has made learning more accessible than ever. It has empowered people to create and share tools and projects that empower others to learn a subject more quickly and effectively. At ULHacks, we want you to leverage today’s technologies to create these projects: projects that empower learning.\n"]))),se={name:"IntroductionSection",components:{SectionWrapper:U},setup:function(){return{ulHacksDescription:ce}}};se.render=ne;var ie=se,le=Object(l["v"])("data-v-66139340");Object(l["l"])("data-v-66139340");var ue=Object(l["e"])("img",{class:"h-20",src:X.a},null,-1),de={class:"navigation-bar__tabs-container flex flex-col items-end"};Object(l["k"])();var pe=le((function(e,t,n,o,a,r){var c=Object(l["p"])("MenuIcon");return Object(l["j"])(),Object(l["d"])("div",{class:["navigation-bar__container w-full flex flex-row justify-between items-center py-4 px-8",{"navigation-bar__container--opaque":o.isPinned}]},[ue,Object(l["e"])("div",de,[Object(l["u"])(Object(l["e"])(c,{class:"navigation-bar__menu-button h-16 w-16",onClick:o.onMenuToggle},null,8,["onClick"]),[[l["r"],o.tabsCollapsedIntoMenu]]),Object(l["u"])(Object(l["e"])("div",{class:["navigation-bar__tabs",{"navigation-bar__tabs--desktop":!o.tabsCollapsedIntoMenu,"navigation-bar__tabs--mobile":o.tabsCollapsedIntoMenu}]},[Object(l["e"])("a",{href:"#introduction",onClick:t[1]||(t[1]=function(){return o.scrollToId&&o.scrollToId.apply(o,arguments)})},"About"),Object(l["e"])("a",{href:"#questions",onClick:t[2]||(t[2]=function(){return o.scrollToId&&o.scrollToId.apply(o,arguments)})},"FAQ"),Object(l["e"])("a",{href:"#sponsors",onClick:t[3]||(t[3]=function(){return o.scrollToId&&o.scrollToId.apply(o,arguments)})},"Sponsors"),Object(l["e"])("a",{href:"#team",onClick:t[4]||(t[4]=function(){return o.scrollToId&&o.scrollToId.apply(o,arguments)})},"Our Team"),Object(l["e"])("a",{href:"#contact",onClick:t[5]||(t[5]=function(){return o.scrollToId&&o.scrollToId.apply(o,arguments)})},"Contact")],2),[[l["r"],o.menuExpanded||!o.tabsCollapsedIntoMenu]])])],2)})),be=(n("a9e3"),n("ac1f"),n("1276"),{name:"NavigationBar",components:{MenuIcon:V["c"]},props:{scrollBreakpoint:{type:Number,required:!0}},setup:function(e){var t=Object(l["m"])(!1),n=Object(l["m"])(!1),o=Object(l["m"])(!1),a=function(){t.value=window.document.querySelector("html").scrollTop>e.scrollBreakpoint},r=function(){n.value=document.body.clientWidth<700};Object(l["h"])((function(){a(),r(),document.addEventListener("scroll",a),document.defaultView.addEventListener("resize",r)}));var c=function(e){var t=e.target.href.split("#",2)[1];e.preventDefault(),document.getElementById(t).scrollIntoView({behavior:"smooth"})},s=function(){o.value=!o.value};return{isPinned:t,tabsCollapsedIntoMenu:n,menuExpanded:o,scrollToId:c,onMenuToggle:s}}});n("a8fe");be.render=pe,be.__scopeId="data-v-66139340";var fe=be,me=(n("b0c0"),n("a4d3"),n("e01a"),Object(l["e"])("div",{class:"flex-1 flex flex-col items-center w-full"},[Object(l["e"])("div",{class:"text-6xl font-bold text-center mb-5"},"Our Team")],-1)),je={class:"flex flex-row flex-wrap justify-evenly m-12"};function ve(e,t,n,o,a,r){var c=Object(l["p"])("TeamMember"),s=Object(l["p"])("SectionWrapper");return Object(l["j"])(),Object(l["d"])(s,{id:"team","data-aos":"fade-up"},{default:Object(l["t"])((function(){return[me,Object(l["e"])("div",je,[(Object(l["j"])(!0),Object(l["d"])(l["a"],null,Object(l["n"])(o.teamMembers,(function(e){var t=e.name,n=e.description,o=e.photoUrl;return Object(l["j"])(),Object(l["d"])(c,{name:t,description:n,photoUrl:o},null,8,["name","description","photoUrl"])})),256))])]})),_:1})}var he={class:"m-6 max-w-xs"},Oe={class:"aspect-w-1 aspect-h-1"},ge={class:"text-xl text-center my-4 font-bold"},we={class:"text-gray-500"};function xe(e,t,n,o,a,r){return Object(l["j"])(),Object(l["d"])("div",he,[Object(l["e"])("div",Oe,[Object(l["e"])("img",{class:"border-2 w-full object-cover rounded-lg",src:n.photoUrl},null,8,["src"])]),Object(l["e"])("div",ge,Object(l["q"])(n.name),1),Object(l["e"])("div",we,Object(l["q"])(n.description),1)])}var ye={name:"TeamMember",props:{name:{type:String,required:!0},description:{type:String,required:!0},photoUrl:{type:String,required:!0}}};ye.render=xe;var ke=ye,_e=[{name:"Leon Si",photoUrl:"/images/leon_si.jpg",description:"I'm Leon, an aspiring ultralearner whose love for learning propelled me into the world of programming. I love leveraging incredible technologies to create projects that empower others.",role:"Lead Organizer"},{name:"Shari Sun",photoUrl:"/images/shari_sun.jpg",description:"I learned things such as coding, art (I have a secret art account that I challenge everyone to find), and have been attempting to learn piano for a while.",role:"Sponsorship & Outreach"},{name:"Kevin Wang",photoUrl:"/images/kevin_wang.jpg",description:"Hi, I'm Kevin, and I'm passionate about coding and mathematics. I mainly program in Python and also experiment with graphic design on the side.",role:"Lead Graphic Designer"},{name:"Avaneesh Kulkarni",photoUrl:"/images/avaneesh_kulkarni.jpg",description:"I enjoy solving contest math problems and programming useful applications. I also like to play basketball and run 5k.",role:"Logistics"},{name:"George Zhang",photoUrl:"/images/george_zhang.jpg",description:"Hey all. I enjoy programming and creating random projects. I also like doing competitive programming and code golfing. In my free time I play games and make music.",role:"Logistics & Developer"},{name:"David Dragon He",photoUrl:"/images/david_dragon_he.jpg",description:"Hi, I like to learn, and I like to program. I like to create projects that benefit society.",role:"Website Developer"},{name:"Kevin Xu",photoUrl:"/images/kevin_xu.jpg",description:"Hi, I'm Kevin, and I like coding, business and mathematics. I love to learn new languages with new projects and think up new ideas.",role:"General Advisor"}],Se={name:"OurTeamSection",components:{TeamMember:ke,SectionWrapper:U},setup:function(){return{teamMembers:_e}}};Se.render=ve;var Ie=Se,Ue={class:"flex-1 flex flex-col items-center"},qe=Object(l["e"])("div",{class:"text-6xl font-bold text-center mb-5"},"Questions",-1),Te={class:"flex flex-col items-stretch self-stretch"};function Le(e,t,n,o,a,r){var c=Object(l["p"])("QuestionContainer"),s=Object(l["p"])("SectionWrapper");return Object(l["j"])(),Object(l["d"])(s,{id:"questions"},{default:Object(l["t"])((function(){return[Object(l["e"])("div",Ue,[qe,Object(l["e"])("div",Te,[(Object(l["j"])(!0),Object(l["d"])(l["a"],null,Object(l["n"])(o.questions,(function(e){var t=e.question,n=e.answer;return Object(l["j"])(),Object(l["d"])(c,{question:t,answer:n},null,8,["question","answer"])})),256))])])]})),_:1})}var He=Object(l["v"])("data-v-2581f8e4");Object(l["l"])("data-v-2581f8e4");var Ce={class:"border-2 rounded-md flex flex-col mx-16 my-2","data-aos":"fade-up"},Pe={class:"question-container__answer p-6"};Object(l["k"])();var We=He((function(e,t,n,o,a,r){return Object(l["j"])(),Object(l["d"])("div",Ce,[Object(l["e"])("div",{class:"p-6 flex-1 cursor-pointer",onClick:t[1]||(t[1]=function(){return o.toggleAnswer&&o.toggleAnswer.apply(o,arguments)})},Object(l["q"])(n.question),1),Object(l["e"])("div",{class:"transition-height ease-in-out duration-500 overflow-y-hidden",ref:"answerEl",style:o.answerStyle},[Object(l["e"])("div",Pe,Object(l["q"])(n.answer),1)],4)])})),Me={props:{question:{type:String,required:!0},answer:{type:String,required:!0}},setup:function(){var e=Object(l["m"])(),t=Object(l["m"])(0);function n(){t.value=e.value.scrollHeight}Object(l["h"])((function(){window.addEventListener("resize",(function(){n()})),n()})),Object(l["i"])((function(){window.removeEventListener("resize",n)}));var o=Object(l["m"])(!1),a=Object(l["b"])((function(){return{height:o.value?"".concat(t.value,"px"):"0"}}));function r(){o.value=!o.value}return{answerEl:e,toggleAnswer:r,isAnswerVisible:o,answerStyle:a}}};n("d979");Me.render=We,Me.__scopeId="data-v-2581f8e4";var Ae=Me,De=[{question:"What is a hackathon?",answer:"A hackathon is an event where people get together to create a project from scratch in a given amount of time."},{question:"Who is allowed to participate?",answer:"All high school and university students from anywhere in the world are welcome to participate in ULHacks!"},{question:"How do I register for ULHacks?",answer:"To register for ULHacks, you'll need to create a Devpost account and register on our Devpost page, as well as fill out the Registration Form (see the Devpost page for more information)."},{question:"How much coding experience do I need?",answer:"ULHacks welcomes participants of all skill levels, even those who have no prior coding experience! We'll be providing you with the resources you need to get started with your project at ULHacks with workshops and mentors; you just need to bring your willingness to learn!"},{question:"What equipment do I need for ULHacks?",answer:"To create a project, all you'll need is a computer or a laptop with all the programming tools necessary to create your project. To submit your project, you'll also need to create a Devpost account and a way to record a demo video for your project."},{question:"Can I participate with a team?",answer:"Absolutely! While you are allowed to create a project on your own, we encourage you to create a team with friends and/or new connections at ULHacks, and we'll also be hosting team-formation activities for those who are looking to hack with a team! The maximum team size is 4 people."}],ze={name:"QuestionsSection",components:{QuestionContainer:Ae,SectionWrapper:U},setup:function(){return{questions:De}}};ze.render=Le;var Be=ze,Ee={class:"w-80 my-12 h-1 bg-gray-400 self-center"};function Qe(e,t){return Object(l["j"])(),Object(l["d"])("div",Ee)}const Ke={};Ke.render=Qe;var Ne=Ke,Je={class:"flex-1 flex flex-col items-center","data-aos":"fade-up"},Ve=Object(l["e"])("div",{class:"text-6xl font-bold text-center mb-8"},"Sponsors",-1),Fe={class:"flex flex-row items-center flex-wrap justify-center"};function Ge(e,t,n,o,a,r){var c=Object(l["p"])("SponsorLogo"),s=Object(l["p"])("SectionWrapper");return Object(l["j"])(),Object(l["d"])(s,{id:"sponsors"},{default:Object(l["t"])((function(){return[Object(l["e"])("div",Je,[Ve,Object(l["e"])("div",Fe,[(Object(l["j"])(!0),Object(l["d"])(l["a"],null,Object(l["n"])(o.sponsors,(function(e){return Object(l["j"])(),Object(l["d"])(c,{name:e.name,logoPath:e.logoPath,websiteUrl:e.websiteUrl},null,8,["name","logoPath","websiteUrl"])})),256))])])]})),_:1})}var Re={class:"m-6 w-80 h-40 transform transition-transform hover:scale-105"},$e=Object(l["e"])("div",{class:"sponsor"},null,-1);function Xe(e,t,n,o,a,r){return Object(l["j"])(),Object(l["d"])("div",Re,[Object(l["e"])("a",{href:e.websiteUrl},[Object(l["e"])("img",{class:"h-full w-full object-contain",src:e.logoPath,alt:e.name},null,8,["src","alt"]),$e],8,["href"])])}var Ye=Object(l["f"])({props:{name:{type:String,required:!0},logoPath:{type:String,required:!0},websiteUrl:{type:String,required:!0}}});Ye.render=Xe;var Ze=Ye,et=[{name:"Linode",logoPath:"/images/sponsors/linode.png",websiteUrl:"https://linode.com"},{name:"Wolfram|Alpha",logoPath:"/images/sponsors/wolfram-alpha.png",websiteUrl:"https://www.wolfram.com/"},{name:"Leading Learners",logoPath:"/images/sponsors/leading-learners.png",websiteUrl:"https://linktr.ee/leadinglearners"},{name:"Elegoo",logoPath:"/images/sponsors/elegoo.png",websiteUrl:"https://elegoo.com"},{name:"AoPS",logoPath:"/images/sponsors/aops.png",websiteUrl:"https://artofproblemsolving.com/"},{name:"echoAR",logoPath:"/images/sponsors/echo-ar.png",websiteUrl:"https://echoar.xyz"},{name:"Repl.it",logoPath:"/images/sponsors/replit.png",websiteUrl:"https://replit.com"}],tt={components:{SectionWrapper:U,SponsorLogo:Ze},name:"SponsorsSection",setup:function(){return{sponsors:et}}};tt.render=Ge;var nt=tt,ot={name:"App",components:{NavigationBar:fe,HeroBanner:R,IntroductionSection:ie,QuestionsSection:Be,SponsorsSection:nt,OurTeamSection:Ie,ContactSection:T,SectionSeparator:Ne}};n("81b9");ot.render=d;var at=ot;o["c"].add(r["a"],a["a"]);var rt=Object(l["c"])(at);rt.component("font-awesome-icon",c["a"]),rt.mount("#app"),i.a.init()},cf05:function(e,t,n){e.exports=n.p+"img/logo.9bc8daea.png"},d979:function(e,t,n){"use strict";n("1caa")}});
//# sourceMappingURL=app.b42a892b.js.map