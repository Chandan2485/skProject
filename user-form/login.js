let registerbtn= document.querySelector("#Resister-btn")
let LogInbtn= document.querySelector("#LogIn-btn")
let userpage=document.querySelector(".container1")


let userArr=[]

if(!(localStorage.getItem("user"))){
    localStorage.setItem("user",JSON.stringify(userArr))
}

registerbtn.addEventListener("click",registeuser)

function registeuser(){
    let flag=0
    let ur= JSON.parse(localStorage.getItem("user"))
    regEmail=document.querySelector("#resister-email")


// @gmail.com


    if((regEmail.value).length>=11 && (regEmail.value).endsWith("@gmail.com")){
         // console.log(regEmail.value)
    ur.forEach(element => {
        if(element.emailId==(regEmail.value)){
            flag++
            // console.log(element)
        }
    });
    if(!flag){
        passcode=Math.floor((Math.random()*10000))
        // alert(passcode)
        ur.push({
            emailId:regEmail.value,
            password:passcode
        })
        localStorage.setItem("user",JSON.stringify(ur))
        alert(`Register Successfully. Your Password is ${passcode} ` )
    }else{
        alert("already register")
    }
    }else{
        alert("invalid")
    }
   
}

LogInbtn.addEventListener("click",loginuser)

function loginuser(el){
    let v=0
    logEmail=document.querySelector("#login-email").value
    logpass=document.querySelector("#login-pass").value
    let udata= JSON.parse(localStorage.getItem("user"))
    // console.log(logEmail,logpass)
    // console.log(e.target)
    udata.forEach((e)=>{
        if(logEmail==e.emailId && logpass==e.password){
            // alert("loggin successfull")
            v++

            userpage.innerHTML=`
            <section class="profile">

            <h1>Thank You ${(e.emailId.slice(0,-10))}</h1>
              </section>
        
            `

            console.log(el.target)
            // console.log("done")
            // e.target.setAttribute("href","./myaccount.html")
            console.log(el.target)
        }
        // console.log("dgff")
    })
    if(!v){
        alert("invalid email or passcode")
    }

}