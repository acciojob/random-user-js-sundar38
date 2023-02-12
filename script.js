let agevalue=document.getElementById("age")
let mailvalue=document.getElementById("email")
let phonevalue=document.getElementById("phone")
let printvalue=document.getElementById("additionalinfo")

fetch("https://randomuser.me/api/")
.then(data=> data.json())
.then(data=> buttonsprint(data.results[0]))

function buttonsprint(data){
    console.log(data);
    agevalue.addEventListener("click", ()=>{
        let printage=`
        <div>
    
       ${data.dob.age}
        </div>
        `
        printvalue.innerHTML=printage
    })
    
}

