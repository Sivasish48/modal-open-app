// variables

const btn = document.querySelector("#open-btn");

const modal = document.querySelector("#modal-container");

const closeBtn = document.querySelector("#close-btn");

// Event Listeners

btn.addEventListener('click' , function(){
    modal.style.display = "block";
})

closeBtn.addEventListener('click' , function(){
    modal.style.display = "none";
})

window.addEventListener('click' , function(e){

   if (e.target === modal){
    modal.style.display="none";
   }
   
})
 
