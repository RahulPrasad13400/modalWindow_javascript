var modal = document.querySelector('.modal')
var overlay = document.querySelector('.overlay')
var btnCloseModal =document.querySelector('.close-modal')
var showModal = document.querySelectorAll('.show-modal')

for(let i=0;i<showModal.length;i++)
{
    showModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}
btnCloseModal.addEventListener('click',function(){
    closeModal()
})
overlay.addEventListener('click',function(){
   closeModal()
})
var closeModal = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}
document.addEventListener('keydown',function(e){
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal()
        }
    }
})
