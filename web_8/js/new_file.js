var count=1;
var table=document.getElementById("tab");
var newTr=document.createElement("tr");

td1=document.createElement("td");
td1.innerHTML=count;

td2=document.createElement("td");
td2span=document.createElement("span");
td2.appendChild(td2span);
td2span.innerHTML=document.myform.xingming.value;
td2span.addEventListener("mouseover",function(){
	this.style.color="red";
}
);
td2span.addEventListener("mouseover",function(){
	this.style.color="black";
})

td3=document.createElement("td");
td3.innerHTML=document.myform.xingbie.value;

td4=document.createElement("td");
newTr.appendChild(td1);
newTr.appendChild(td2);
newTr.appendChild(td3);
newTr.appendChild(td4);

count=count+1;

function deleteTr(obj){
	tr=obj.parentNode.parentNode;
	tboby=tr.parentNode;
	tr.removeChild(obj);
}
