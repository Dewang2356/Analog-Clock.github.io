var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};setInterval(function(){d=new Date;hr=d.getHours();min=d.getMinutes();sec=d.getSeconds();hr_rotation=30*hr+min/2;min_rotation=6*min;sec_rotation=6*sec;hour.style.transform="rotate("+hr_rotation+"deg)";minute.style.transform="rotate("+min_rotation+"deg)";second.style.transform="rotate("+sec_rotation+"deg)"},1E3);
var change=document.querySelector(".switch"),toggle=document.querySelector(".toggle"),header=document.querySelector("header");change.addEventListener("click",function(){header.classList.toggle("active");header.classList.contains("active")?toggle.innerHTML="\ud83c\udf19":toggle.innerHTML="\ud83c\udf1e"});