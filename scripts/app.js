const gitHubUrl = "https://api.github.com/users/";
const inputEl = document.querySelector(".search-bar__input");
const nameEl = document.querySelector(".result__user-name");
const usernameEl = document.querySelector(".result__user-username");
const avatar = document.querySelector(".result__avatar");
const userBio = document.querySelector(".bio");
const searchBtn = document.querySelector(".search-bar__btn");
const repos = document.querySelector(".repos");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const city = document.querySelector(".city");
const website = document.querySelector(".website");
const twitter = document.querySelector(".twitter");
const company = document.querySelector(".company");
const joinedDate = document.querySelector(".result__user-join-date");
const errorMsg = document.querySelector(".error");

searchBtn.addEventListener("click", (e) => {
  errorMsg.classList.remove("active");
  e.preventDefault();
  let username = inputEl.value;

  fetch(`${gitHubUrl}${username}`)
    .then((resp) => {
      if (!resp.ok) {
        throw Error(resp.statusText);
      }
      return resp.json();
    })
    .then((data) => {
      getData(data);
    })
    .catch((err) => {
      console.log("Not available");
      errorMsg.classList.add("active");
      console.log(err);
    });
});

// Display default octocat account on start
let username = "octocat";

fetch(`${gitHubUrl}${username}`)
  .then((response) => response.json())
  .then((data) => {
    getData(data);
  });

function clearInput() {
  inputEl.value = "";
}

function getData(data) {
  nameEl.textContent = data["name"];
  usernameEl.textContent = `@${data["login"]}`;
  avatar.src = data["avatar_url"];

  userBio.textContent =
    data["bio"] === null ? "This profile has no bio" : data["bio"];

  repos.textContent = data["public_repos"];
  followers.textContent = data["followers"];
  following.textContent = data["following"];

  const validateData = (data, element) =>
    (element.textContent = data != null && data != "" ? data : "Not Available");

  validateData(data["twitter_username"], twitter);
  validateData(data["company"], company);
  validateData(data["blog"], website);
  validateData(data["location"], city);

  const joinedDateRaw = data["created_at"]
    .split("T")
    [[0]].toString()
    .split("-");

  const [year, month, day] = joinedDateRaw;
  joinedDate.textContent = `Joined ${day} ${month} ${year}`;
  clearInput();
}
