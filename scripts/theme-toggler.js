const toggleBtn = document.querySelector('.theme-selector')
const container = document.querySelector('.container')

toggleBtn.addEventListener('click', ()=>{
    container.classList.toggle('dark')
})