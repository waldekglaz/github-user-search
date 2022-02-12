const gitHubUrl = 'https://api.github.com/users/';
const inputEl = document.querySelector('.search-bar__input');
const nameEl = document.querySelector('.result__user-name');
const usernameEl = document.querySelector('.result__user-username');
const avatar = document.querySelector('.result__avatar');
const userBio = document.querySelector('.bio');
const searchBtn = document.querySelector('.search-bar__btn');
const repos = document.querySelector('.repos');
const followers = document.querySelector('.followers');
const following = document.querySelector('.following');
const city = document.querySelector('.city');
const website = document.querySelector('.website');
const twitter = document.querySelector('.twitter');
const company = document.querySelector('.company');
const joinedDate = document.querySelector('.result__user-join-date')



searchBtn.addEventListener('click', (e)=>{
e.preventDefault();
let username = inputEl.value
fetch(`${gitHubUrl}${username}`)
.then(response => response.json())
.then(data => {
console.log(data)
getData(data)
});
})

let username = 'octocat'

fetch(`${gitHubUrl}${username}`)
.then(response => response.json())
.then(data => {
  getData(data)
  });

  function clearInput(){
    inputEl.value = ''
  }

  function getData(data){
    console.log(data)
    nameEl.textContent = data['name'];
    usernameEl.textContent = `@${data['login']}`;
    avatar.src = data['avatar_url'];
    userBio.textContent = data['bio'];
    repos.textContent = data['public_repos'];
    followers.textContent = data['followers'];
    following.textContent = data['following'];
    
    if(data['twitter-username'] != null){
      twitter.textContent = data['twitter-username']
    }else{
      twitter.textContent = 'Not Available';
    }
    if(data['company'] != null){
      company.textContent = data['company']
    }else{
      company.textContent = 'Not Available';
    }
    if(data['blog'] != null){
      website.textContent = data['blog']
    }else{
      website.textContent = 'Not Available';
    }
    if(data['location'] != null){
      city.textContent = data['location']
    }else{
      city.textContent = 'Not Available';
    }
    joinedDate.textContent = data['created_at'].split('T')[[0]];
    clearInput()
  }