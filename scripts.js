let modal = document.getElementById('modal')
let cancel_button = document.getElementById('cancel')
cancel_button.addEventListener("click", e=>closeModal())

function closeModal() {
    modal.style.opacity = 0
    modal.style.top=0
    setTimeout(() => {
       modal.style.display="none" 
    }, 300)
}

window.addEventListener("load", e=>{
    modal.style.opacity = 1
    modal.style.top = "50%"
})