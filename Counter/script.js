let value=0;
const val=document.getElementById('value');
const btns=document.querySelectorAll('.btn');
const decrease=document.getElementById('decrease');
const increase=document.getElementById('increase');
const reset= document.getElementById('reset');

decrease.addEventListener("click",
function(){
    value=value-1;
});
increase.addEventListener("click",function(){
    value=value+1;   
});
reset.addEventListener("click",function(){
    value=0;
   
});
btns.forEach(function (btn) {
    btn.addEventListener('click',
    function(){
        if(value<0){
            val.style.color="red";
        }
        if(value>0){
            val.style.color="green";
        }
        if(value==0){
            val.style.color="black";
        }
        val.textContent=value; 
    });
});
