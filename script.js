
"use strict";

document.getElementsByName('siteName')[0].focus();
window.onload=init;
let storedSite=[];
let name;
let link;
let nameForLocalStorage="favoriteSite";
let containerForSites=document.getElementById("containerSites");

 containerForSites.onclick=function(event){
 let target=event.target;
while(target!=this){
      if(target.tagName==="BUTTON"){
         deleteItem(target);
         return;
      }
      
      target =target.parentNode;
     }  
 
 };

 function init(){
    if (localStorage[nameForLocalStorage]) {
       storedSite=JSON.parse(localStorage[nameForLocalStorage]);
        for (let i = 0; i < storedSite.length; i++) {
             name=storedSite[i].name;
             link=storedSite[i].link;
            add(name,link);
    }
}
};

function saveData(event){
 event.preventDefault();
 let form =document.forms[0];
  name=form.elements[0].value;
  link=form.elements[1].value;
 let obj= {name:name,link:link};
 if (validate(name,link)){
   storedSite.push(obj);
setItems(nameForLocalStorage,storedSite);
   add(name,link);
 }

document.forms[0].elements[0].value="";
document.forms[0].elements[1].value="";

};

 function add(name,link){
    let div=document.createElement("div");
    div.className="item";
    let ul=document.createElement("ul");
    let liFirst=document.createElement("li");
    let liSecond=document.createElement("li");
    let liThird=document.createElement("li");
    ul.className="listOfSites";
    liFirst.innerHTML=name;
    ul.appendChild(liFirst);
    let a= document.createElement("a");
    a.className="link";
    a.setAttribute("href",link);
    a.innerHTML="Visit";
     liSecond.appendChild(a);
     ul.appendChild(liSecond);
    let button=document.createElement("button");
    button.className="delete";
    button.innerHTML="I am fed";
     liThird.appendChild(button);
     ul.appendChild(liThird);
    div.appendChild(ul);
    containerForSites.appendChild(div);

  };

  function deleteItem(target){
    let elementForRemove= target.parentNode.parentNode.firstChild.innerHTML;
	let list=JSON.parse(localStorage.getItem("favoriteSite"));        
    for (let i = 0; i <list.length; i++) {
      if (list[i].name===elementForRemove.toLowerCase()) {
        list.splice(i,1);
      }
    }
    target.parentNode.parentNode.parentNode.remove();
    if (!list.length){
        localStorage.removeItem("favoriteSite");
      }
      else {
      setItems(nameForLocalStorage,list)
       
            }
	};

 function setItems(favorite,items){

     localStorage[favorite] = JSON.stringify(items);

 }

  function validate(name,link){
 let reg=/(https?).[/].*[.]/g;
    if (name==="" && link==="") {
    	alert("Please full textfield");
    	return false;
    }
    else if (name==="") {
    	alert("Enter the name");
    	return false;
    }
    else if (link==="") {
    	alert("Enter the link");
    	return false;
    }

    else if(!link.match(reg)){
    	alert("Incorrect format");
    return false;
}
return true;
    };
   

    
   



   




















   


