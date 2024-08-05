const menu=document.getElementById("menu");
const aside_content=document.getElementById("aside_content");
const btn=document.getElementById("btn")
function aside()
{
  aside_content .style.display="block";
  btn.style.display="none";
}

menu.addEventListener("click",aside);