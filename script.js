
let userfullname=document.getElementById("fullname")
let photo=document.getElementById("displayphoto")
let printvalue=document.getElementById("additionalinfo")
let loadnewuser=document.getElementById("getUser")
    
loadnewuser.addEventListener("click", ()=>{
fetch("https://randomuser.me/api/")
.then(response=> response.json())
.then(data=> {
	printvalue.innerHTML="";
    let userdetails=data.results[0];
    console.log(userdetails);
    photo.src=userdetails.picture.large
    userfullname.innerHTML=userdetails.name.first+" "+userdetails.name.last;
    //console.log(userdetails.name.first);
    //console.log(userfullname.dataset.name);
    printvalue.dataset.age=userdetails.dob.age
    printvalue.dataset.email=userdetails.email
    printvalue.dataset.phone=userdetails.phone   
    
});
});   

let printage=document.querySelector('[data-attr="age"]')
let printemail=document.querySelector('[data-attr="email"]')
let printphoneno=document.querySelector('[data-attr="phone"]')

printage.addEventListener("click", ()=>
    printvalue.innerHTML=printvalue.dataset.age
)

printemail.addEventListener("click", ()=>
    printvalue.innerHTML=printvalue.dataset.email
)

printphoneno.addEventListener("click", ()=>
    printvalue.innerHTML=printvalue.dataset.phone
)

