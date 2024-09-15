const element = document.getElementById("input");
function Add(){
    if(element.value==""){
        alert("Please enter the text")
    }
    else{
        const list = document.createElement('li');
        list.innerHTML = element.value;
        document.getElementById('newElement').appendChild(list);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        list.appendChild(span);
        element.value = "";
    }
 }
document.getElementById("newElement").addEventListener("click",function(e){
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
    }
},false);