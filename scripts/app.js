const gitHubUrl = 'https://api.github.com/users/';
const inputEl = document.querySelector('#text-field');
const name = document.querySelector('.result__user-name');
const usernameEl = document.querySelector('.result__user-username');
const avatar = document.querySelector('.result__avatar');
const userBio = document.querySelector('.bio');
const searchBtn = document.querySelector('.btn');
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
    const username = inputEl.value
    fetch(`${gitHubUrl}${username}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    name.textContent = data['name'];
    usernameEl.textContent = data['login'];
    avatar.src = data['avatar_url'];
    userBio.textContent = data['bio'];
    repos.textContent = data['public_repos'];
    followers.textContent = data['followers'];
    following.textContent = data['following'];
    city.textContent = data['location'];
    twitter.textContent = data['twitter-username'];
    company.textContent = data['company'];
    website.textContent = data['blog'];
    joinedDate.textContent = data['created_at'].split('T')[[0]]
    });
  })