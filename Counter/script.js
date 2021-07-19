let value=0;
const val=document.getElementById('value');
const decrease=document.getElementById('decrease');
const increase=document.getElementById('increase');
const reset= document.getElementById('reset');

decrease.addEventListener("click",
function(){
    value=value-1;
    val.textContent=value;
});
increase.addEventListener("click",function(){
    value=value+1;
    val.textContent=value;
    
});
reset.addEventListener("click",function(){
    value=0;
    val.textContent=value; 
});
