const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById('btn');
const color=document.getElementById('color');
btn.addEventListener("click", 
function (){
    var rand=getRand();
    color.textContent=colors[rand];
    document.body.style.backgroundColor=colors[rand];
});

function getRand(){
    return Math.floor(Math.random()*colors.length);
}
