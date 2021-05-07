window.addEventListener('DOMContentLoaded', (event) => {



const followersButton = document.querySelector('.follower__button')
const followers = document.querySelectorAll('.follower__div')
let clicked = false;

followersButton.addEventListener('click', e => {
    if (!clicked) {
        followers.forEach(a=>{
            a.classList.remove('hidden')
        })
        clicked = true;
    } else {
        followers.forEach(a=>{
            a.classList.add('hidden')
        })
        clicked = false;
    }
})

});
