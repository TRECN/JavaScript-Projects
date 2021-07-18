const colors=["green","red", "gray", "blue"];
const btn=document.getElementById('btn');
const color=document.getElementById('color');
btn.addEventListener("click", 
function (){
    color.textContent=colors[1];
    document.body.style.backgroundColor=color.textContent;
    
});
