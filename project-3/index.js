
let r;
const pi=3.14;
let c;

document.getElementById("mySubmit").onclick=function(){
 r= document.getElementById("mytext").value
 r=Number(r)
 
c=2*pi*r
 document.getElementById("myh3").textContent=c
 
}