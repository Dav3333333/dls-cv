const menuContainer = document.querySelector("nav");
const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const name = form.querySelector("input[name='name']");
    const email = form.querySelector("input[name='email']");
    const message = form.querySelector("textarea[name='message']");

    // if(name.value.trim("") == "" || email.value.trim("") || message.value.trim("")){
    //     return;
    // }

    name.value = ""
    email.value = ""
    message.value = ""
    
});


menuContainer.addEventListener("click", (e)=>{
    const target = e.target;

    // remove the cliked class to the selected menu
    if(target.classList.contains("menu")){
        target.closest("nav").querySelector(".menu-clicked").classList.remove("menu-clicked");
        target.classList.add("menu-clicked");
        const tagDiv = document.querySelector(`${target.hash}`)

        // removing the class hashing to the hashed title
        tagDiv.parentNode.querySelector(".hashing").classList.remove("hashing")
        
        // adding the hashing class to the cliked hash
        tagDiv.querySelector(".bloc_title").classList.add("hashing")
    }


});


function sentMessage(names, email, message) {
    const fs = require('fs');
    const contenu = `${names},${email},${message}`;

    try{
        fs.appendFileSync('./messages.csv', contenu,'utf8');
        console.log("done")

    }catch(err){
        console.error(err)
    }
}

