const btn=document.getElementById('btn');
const color=document.getElementById('color');
btn.addEventListener("click", 
function (){
    document.body.style.backgroundColor=color.textContent;
});
