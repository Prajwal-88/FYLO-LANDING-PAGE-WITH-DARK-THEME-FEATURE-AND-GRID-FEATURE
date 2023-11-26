const form = document.querySelector("form")
const input_holder = document.querySelector("#input_holder");
const submit = document.querySelector("#submit")

window.addEventListener('load',()=>{
    input_holder.value="";
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert_fn();
})

function alert_fn(){
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if(!emailRegex.test(input_holder.value)){
        const div = document.createElement('div');
        div.className="alert text-[10px] text-left text-Light_Red_error ps-5 mt-2"
        div.append("PLEASE ENTER AN VALID EMAIL ADRESS!");
        input_holder.parentElement.after(div);
    }else{
       submit=true; 
    }
    submit.disabled=true;
    submit.classList.add('cursor-not-allowed')
}

input_holder.addEventListener('focus',()=>{
    document.querySelector('.alert').remove();
    submit.disabled=false;
    submit.classList.remove('cursor-not-allowed')
})
    