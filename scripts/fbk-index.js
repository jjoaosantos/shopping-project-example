const follow = document.querySelector(".unfollowingBtn");
const unfollow = document.querySelector(".followingBtn");
const main = document.querySelector("main");

follow.addEventListener("click", () => {
    localStorage.setItem("fbk-following", true);
        followingDisplayCheck();
});

unfollow.addEventListener("click", () => {
    localStorage.removeItem("fbk-following");
    followingDisplayCheck();
});

function followingDisplayCheck() {
    if (localStorage.getItem("fbk-following")) {
        unfollow.style.display = "block";
        follow.style.display = "none";
    } else {
        unfollow.style.display = "none";
        follow.style.display = "block";
    }
}

followingDisplayCheck();