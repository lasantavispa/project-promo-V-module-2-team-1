const y=document.querySelector(".js-iconDesign"),q=document.querySelector(".fieldset__legend--arrowupDesign"),l=document.querySelector(".fieldset__legend--arrowDownDesign"),j=document.querySelector(".form__design--colors");l.classList.add("hidden");function w(){j.classList.toggle("hidden"),q.classList.toggle("hidden"),l.classList.toggle("hidden")}y.addEventListener("click",w);const v=document.querySelector(".js_reset_btn");document.querySelector(".js-name");document.querySelector(".js-job");const n=document.querySelector(".js-designCards"),b=document.querySelector(".wholeForm");document.querySelector(".js-designPalette");const k=document.querySelector(".js-paletteOne"),F=document.querySelector(".js-paletteTwo"),T=document.querySelector(".js-paletteThree");function D(){n.classList.add("paletteOne"),n.classList.remove("paletteTwo","paletteThree")}function _(e){n.classList.add("paletteTwo"),n.classList.remove("paletteOne","paletteThree")}function E(){n.classList.add("paletteThree"),n.classList.remove("paletteOne","paletteTwo")}k.addEventListener("click",D);F.addEventListener("click",_);T.addEventListener("click",E);function C(){n.classList.remove("paletteOne","paletteTwo","paletteThree")}function O(){b.reset(),C()}v.addEventListener("click",O);const H=document.querySelector(".js-iconForm"),I=document.querySelector(".fieldset__legend--arrowupForm"),d=document.querySelector(".fieldset__legend--arrowDownForm"),P=document.querySelector(".boxToBeHidden");d.classList.add("hidden");function $(e,t,L){e.classList.toggle("hidden"),t.classList.toggle("hidden"),L.classList.toggle("hidden")}H.addEventListener("click",function(){$(P,I,d)});const r=document.querySelector(".js-name-card"),i=document.querySelector(".js-name-form"),c=document.querySelector(".js-job-card"),a=document.querySelector(".js-job-form"),x=document.querySelector(".js-form"),s={palette:1,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""},M=e=>{const t=e.target.id;s[t]=e.target.value,console.log(t,e.target.value),console.log(s)};x.addEventListener("input",M);function R(e){e.preventDefault();const t=i.value;t===""?r.innerHTML="Nombre Apellido":r.innerHTML=t}function U(e){e.preventDefault();const t=a.value;t===""?c.innerHTML="Front-end developer":c.innerHTML=t}i.addEventListener("input",R);a.addEventListener("input",U);const A=document.querySelector(".js-iconShare"),B=document.querySelector(".fieldset__legend--arrowupShare"),u=document.querySelector(".fieldset__legend--arrowDownShare"),N=document.querySelector(".fieldset__boxcontent"),m=document.querySelector(".js-buttoncreate"),g=document.querySelector(".js-createdcard");u.classList.add("hidden");function V(){N.classList.toggle("hidden"),B.classList.toggle("hidden"),u.classList.toggle("hidden")}A.addEventListener("click",V);g.classList.add("hidden");function G(e){e.preventDefault(),g.classList.toggle("hidden"),m.classList.toggle("backgroundgrey")}m.addEventListener("click",G);const o=new FileReader,J=document.querySelector(".js-btn"),z=document.querySelector(".js-img-card"),K=document.querySelector(".js-profile-preview");function Q(e){const t=e.currentTarget.files[0];o.addEventListener("load",W),o.readAsDataURL(t)}function W(){z.style.backgroundImage=`url(${o.result})`,K.style.backgroundImage=`url(${o.result})`}J.addEventListener("change",Q);const X=document.querySelector(".js-phone-card"),Y=document.querySelector(".js-mail-card"),Z=document.querySelector(".js-linkedin-card"),ee=document.querySelector(".js-git-card"),h=document.querySelector(".js-phone-form"),p=document.querySelector(".js-mail-form"),f=document.querySelector(".js-linkedin-form"),S=document.querySelector(".js-git-form");function te(){Y.href=`mailto:${p.value}`}p.addEventListener("input",te);function ne(){X.href=`tel:${h.value}`}h.addEventListener("input",ne);function oe(){Z.href=`https://www.linkedin.com/in/${f.value}`}f.addEventListener("input",oe);function re(){ee.href=`https://github.com/${S.value}`}S.addEventListener("input",re);
//# sourceMappingURL=main.js.map
