// Language switch (English / Simplified Chinese). The choice is remembered across pages.
(function(){
var lang="en";
try{var s=localStorage.getItem("lang");if(s==="zh"||s==="en")lang=s;else if((navigator.language||"").toLowerCase().indexOf("zh")===0)lang="zh"}catch(e){}
function set(l){lang=l;document.body.setAttribute("data-lang",l);document.documentElement.lang=l==="zh"?"zh-CN":"en";try{localStorage.setItem("lang",l)}catch(e){}}
document.getElementById("lang").addEventListener("click",function(){set(lang==="en"?"zh":"en")});
set(lang);
})();
