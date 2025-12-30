const form = document.querySelector('#form')
const Uname = document.querySelector('#username')
const Email = document. querySelector('#email')
const Pass = document.querySelector('#password')
const ConPass = document.querySelector('#confirmpassword')


form.addEventListener('submit' , (e)=> {
   
   if( !validateInput()){
        e.preventDefault()
   }

})

function validateInput(){
    const usernameVal = Uname.value.trim()
    const emailVal = Email.value.trim()
    const PassVal = Pass.value.trim()
    const CpassVal = ConPass.value.trim()
    success = true

     if (usernameVal === "") {
        setError(Uname, 'User Name is required')
        success = false
    } 
    
    else {
        setSuccess(Uname)
    }

    if(emailVal===''){
        success = false
        setError(Email,'Email is required')
    }

    else if (!validateEmail(emailVal)){
        success = false
        setError(Email,'Please enter a valid eamil')
    }
    else{
        setSuccess(Email)
    }

    if(PassVal==''){
        success = false
        setError(Pass,'Password is required')
    }
    else if(PassVal.length<8){
        success = false
        setError(Pass,'Password must  be atleaste 8 charector')
    }
    else{
        setSuccess(Pass)
    }

    if(CpassVal ===''){
        success = false
        setError(ConPass,'Confirm password is required')
    }
    else if(CpassVal!==PassVal){
        setError(ConPass, 'Password does not Match')
    }
    else{
        setSuccess(ConPass)
    }

    return success

    }


function setError(element, message){
    const inputGroup = element.parentElement
    const errorElemnt = inputGroup.querySelector('.error')

    errorElemnt.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

}

function setSuccess(element){
    const inputGroup = element.parentElement
    const errorElemnt = inputGroup.querySelector('.error')

    errorElemnt.innerText = " ";
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email)=>{
    return String(email).toLowerCase()
     .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
}