let value=0;
var val=document.getElementById('value');
var decrease=document.getElementsById('decrease');
var increase=document.getElementsById(('increase');
var reset= document.getElementsById(('reset');

decrease.addEventListener("click",function(){
    value=value-1;
    val.textContent=value;
});
increase.addEventListener("click",function(){
    value=value+1;
    val.textContent=value;
    
});