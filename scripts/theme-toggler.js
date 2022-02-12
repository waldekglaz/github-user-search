const toggleBtn = document.querySelector('.theme-selector');
const container = document.querySelector('.container');
const logo = document.querySelector('.logo');
const togglerIcon = document.querySelector('.theme-selector__icon');
const togglerText = document.querySelector('.theme-selector__text');
const searchBar = document.querySelector('.search-bar');
const searchBarInput = document.querySelector('.search-bar__input');
const result = document.querySelector('.result');
const stats = document.querySelector('.user-stats');
const detailIcons = document.getElementsByClassName('detail__icon')
toggleBtn.addEventListener('click', ()=>{
    container.classList.toggle('dark');
    logo.classList.toggle('dark');
    toggleBtn.classList.toggle('dark');
    searchBar.classList.toggle('dark');
    searchBarInput.classList.toggle('dark');
    result.classList.toggle('dark');
    stats.classList.toggle('dark');
    for(let i =0; i < detailIcons.length; i++){
        detailIcons[i].classList.toggle('dark')
    }
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