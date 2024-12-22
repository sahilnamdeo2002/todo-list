const listcontainer = document.getElementById("list-container");
const inputbox = document.getElementById("input-box");

function addtask() 
{

    if (inputbox.value === ' ') 
    {
        alert("Enter some value");
    } else 
    {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);

        let span=document.createElement("span");
       span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savetask();

}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savetask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savetask();
    }
})
function savetask(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();