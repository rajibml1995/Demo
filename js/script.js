const form=document.querySelector("#create-account-form");
const usernameInput=document.querySelector("#username");
const emailInput=document.querySelector("#email");
const passwordInput=document.querySelector("#password");
const confirmpasswordInput=document.querySelector("#confirm-password");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    validateForm();
});
function validateForm(){
    if(usernameInput.Value.trim()==" "){
        setError(usernameInput,"name field can not be empty");
    }
    else if(usernameInput.Value.trim().length < 5 || unsernameInput.nodeValue.trim().length >15){
        setError(usernameInput,"name length can not be less than 5 or greater than 15");
    }
    else{
        setSuccess(usernameInput);
    }
    if(emailInput.value.trim()==""){
        setError(emailInput,"provide email adress");
    }
    else if(isEmailvalid(emailInput.value)){
        setSuccess(emailInput);
 
    }
    else{
        setError(emailInput,"put the valid email address");
    }
    if(passwordInput.value.trim()==""){
        setError(passwordInput,"password cannot be empty");
    }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >16){
        setError(passwordInput,"password length should be greater than 6 and less than 16 characters");
    }
    else{
        setSuccess(passwordInput);
    }
    if(confirmpasswordInput.value.trim()==""){
        setError(confirmpasswordInput,"confirmPassword cannot be empty");
    }
    else if(confirmpasswordInput.value !== passwordInput.value){
        setError(confirmpasswordInput,"password does not match");
    }
    else{
        setSuccess(confirmpasswordInput);
    }
}
function setError(element,errorMessage){
    const parent=element.parentElement;
    if(parent.classList.contains("success")){
        parent.classList.remove("success");
    }
    parent.classList.add("error");
    const paraGraph=parent.querySelector("p");
    paraGraph.textContent=errorMessage;
}
function setSuccess(element){
    const parent= element.parentElement;
    if(parent.classList.contains("erroe")){
        parent.classList.remove("error");
    }
    parent.classList.add("success");

}
function isEmailvalid(){

}