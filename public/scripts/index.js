function modalHandle(){
    const modalHandler = document.querySelectorAll("#modal-handler")
    const modal = document.querySelector("#modal")
    
    modalHandler.forEach(handler => {
        handler.addEventListener('click', () => {
            modal.classList.toggle('hide') 
        }); 
    })
}
modalHandle()