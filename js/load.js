function load(){function e(){j.bOff=!j.bOff;for(var e=0;e<w.length;e++)w[e].muted=j.bOff;j.bOff?(x.style.webkitTransform="translate(0)",x.style.transform="translate(0)",I.src="images/icons/jingyin.png"):(x.style.webkitTransform="translate(32px)",x.style.transform="translate(32px)",I.src="images/icons/bofang.png")}function n(e){e.num=Math.round(100*Math.random())+80,e.sign=-e.sign,e.speed=2*Math.random()+1,e.times=0,e.iTimer=setInterval(function(){e.angle+=e.speed*e.sign,e.times+=e.speed*e.sign,e.style.webkitTransform="rotate("+e.angle+"deg)",e.style.transform="rotate("+e.angle+"deg)",Math.abs(e.times)>=e.num&&(clearInterval(e.iTimer),n(e))},12)}function i(){a=0,o=270*Math.PI/180,m.strokeStyle="#fbb84e",m.shadowColor="#fbb84e",u=86,d=86,h=57;for(var e=0;e<loadingArr.length;e++){var n=document.createElement("img");n.src=loadingArr[e],n.onload=function(){a++,s=o-c,g(o,s),o=s,p.innerHTML=Math.round(a*l)+"",a==loadingArr.length&&(clearInterval(b),t.style.opacity=0,setTimeout(function(){t.style.display="none";for(var e=0;e<T.length-1;e++)clearInterval(T[e].iTimer);ground(),change()},500))}}}function g(e,n){m.beginPath(),m.arc(u,d,h,e,n,y),m.lineWidth=1,m.stroke()}var a,o,s,t=document.getElementById("load"),r=document.getElementById("myCanvas"),m=r.getContext("2d"),c=2*Math.PI/loadingArr.length,l=100/loadingArr.length,p=document.getElementById("percent"),f=t.getElementsByTagName("p")[0].getElementsByTagName("span");p.innerHTML="0",m.shadowOffsetX=0,m.shadowOffsetY=0,m.shadowBlur=10,m.lineWidth=1;var u,d,h,b,y=!0;i();var v,T=t.getElementsByClassName("sj-box"),_=0,j=document.getElementById("audio"),w=document.getElementsByTagName("audio"),x=j.getElementsByTagName("div")[0],I=x.getElementsByTagName("img")[0];location.href.replace(/audio=(\D+)/,function(e,n){v="true"==n}),j.bOff=v||!1,e(),j.onclick=e,f[0].iTimer=setInterval(function(){f[0].innerHTML=Number(f[0].innerHTML)+1},1e3),f[1].iTimer=setInterval(function(){_%3?f[1].innerHTML+=".":f[1].innerHTML=".",_++},400);for(var M=0;M<T.length-1;M++)T[M].angle=0,T[M].sign=1,n(T[M])}for(var loadingArr=["images/icons/bofang.png","images/icons/load1.png","images/icons/load2.png","images/icons/header1.png","images/ufo/cutufo_0.png","images/ufo/cutufo_1.png","images/ufo/cutufo_2.png","images/ufo/cutufo_3.png","images/ufo/cutufo_4.png","images/ufo/cutufo_5.png","images/ufo/cutufo_6.png","images/ufo/cutufo_7.png","images/ufo/cutufo_8.png","images/ufo/cutufo_9.png","images/ufo/cutufo_10.png","images/ufo/cutufo_11.png","images/ufo/cutufo_12.png","images/ufo/cutufo_13.png","images/shakelight.png","images/fire.png","images/light.png","images/icons/header.png","images/icons/audio.png","images/icons/button.png","images/topbg.png","images/expbj.jpg","images/icons/indicate.png","images/icons/delta.png","images/icons/bian.png","images/icons/fan-dotted.png","images/icons/fan3.png","images/icons/fan-dotted2.png","images/icons/below-circle.png","images/icons/below-circle2.png","images/icons/time.png","images/icons/fan4.png","images/icons/text.png","images/icons/text.png","images/icons/table.png","images/planet.jpg","images/icons/work-circle.png","images/icons/bar_normal.png","images/icons/bar_acvite.png","images/icons/jt.png","images/icons/workbj.png","images/ufo/glow.png","images/icons/alerttop.png","images/icons/alertbottom.png","images/icons/close.png","images/grxxbg.jpg","images/xxbg.png","images/icons/circle.png","images/icons/circle2.png","images/icons/circle3.png","images/icons/circle4.png","images/icons/circle5.png","images/icons/circle6.png","images/icons/circle7.png","images/icons/circle8.png","images/xxbg2.png"],i=0;i<Json.project.length;i++)for(var j=0;j<Json.project[i].image.length;j++)loadingArr.push(Json.project[i].image[j]);for(var i=0;i<Json.work.length;i++)loadingArr.push(Json.work[i].logo);loadingArr.push(Json.myInfo.head);