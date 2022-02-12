const toggleBtn = document.querySelector('.theme-selector');
const container = document.querySelector('.container');
const logo = document.querySelector('.logo');
const togglerIcon = document.querySelector('.theme-selector__icon');
const togglerText = document.querySelector('.theme-selector__text')

toggleBtn.addEventListener('click', ()=>{
    container.classList.toggle('dark');
    logo.classList.toggle('dark');
    toggleBtn.classList.toggle('dark');
    if(toggleBtn.classList.contains('dark')){
        togglerIcon.src = './assets/icon-sun.svg';
        togglerText.textContent = 'LIGHT';
        togglerText.classList.toggle('dark');
    }else{
        togglerIcon.src = './assets/icon-moon.svg';
        togglerText.textContent = 'DARK';
        togglerText.classList.remove('dark');

    }
    console.log(toggleBtn.textContent)
    
})