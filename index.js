const input = document.querySelector("input");
const password = "user";
const message = "Wyjechałam na zawsze";
const div = document.querySelector("div");
input.addEventListener('keyup', (e) =>{console.log(e.target.value)

    if(password===e.target.value){
        div.textContent = message;
        e.target.value="";
    }else{
        div.textContent="";
    }
})
input.addEventListener("focus", (e)=>{
    e.target.classList.add("active");
})
input.addEventListener("blur", (e)=>{
    e.target.classList.remove("active");
})













