

 document.getElementsByName('siteName')[0].focus();
window.onload=init;
let storedSite=[];

function save_data(event){
 event.preventDefault();
 let form =document.forms[0];
 let name=form.elements[0].value;
 let link=form.elements[1].value;
  if (validate(name,link)){
  
 let obj= new Site(name,link);
 function Site(name,link){

 this.name=name; 
 this.link=link;
 }
 //var obj= {name:name,link:link};
   storedSite.push(obj);
   localStorage.setItem("storedSite",JSON.stringify(storedSite));
   add(name,link);
 }

document.forms[0].elements[0].value="";
document.forms[0].elements[1].value="";

}
function add(name,link){
    let container = document.getElementsByClassName("container_sites")[0];
    let section= document.createElement("section");
    section.className="item";
    let span=document.createElement("span");
    span.className="title";
    span.innerHTML=name;
    let a= document.createElement("a");
    a.className="link";
    a.setAttribute("href",link);
    a.innerHTML="Visit";
    let button=document.createElement("button");
    button.className="delete_item";
    button.innerHTML="I am fed";
   	section.appendChild(span);
   	section.appendChild(a);
   	section.appendChild(button);
  	container.appendChild(section);
  }



 function init(){
    if (localStorage.storedSite || JSON.parse(localStorage.getItem("storedSite")).length!=0) {
       let storedSite=JSON.parse(localStorage.storedSite);
        for (var i = 0; i < storedSite.length; i++) {
            let name=storedSite[i].name;
            let link=storedSite[i].link;
            add(name,link);

    }
}
}

   let container=document.getElementById("container_sites");
   container.onclick=function(event){
   var target=event.target;
     while(target!=this){
      if(target.tagName==="BUTTON"){
         delete_item(target);
         return;
      }
      
      target =target.parentNode;
     }   
 
}

  function delete_item(target){
  	let name;
    let link;
    let elementToremove= target.parentNode.firstElementChild.innerHTML;
	let storedSite=JSON.parse(localStorage.getItem("storedSite"));        
    let newStoredSite= storedSite.filter(function(obj){
          if (obj.name!=elementToremove) {
			return obj;
          }
             });
   localStorage.setItem("storedSite",JSON.stringify(newStoredSite));
   target.parentNode.remove();
            }
	

    function validate(name,link){

 let reg=/(https?).[/].*[.]/g;
    if (name==="" && link==="") {
    	alert("Please full texfield");
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
    }
   

    
   



   




















   


