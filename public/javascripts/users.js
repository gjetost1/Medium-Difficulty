window.addEventListener('DOMContentLoaded', (event) => {



const followersButton = document.querySelector('.follower__button')
const followers = document.querySelector('.follower__list__container')

followersButton.addEventListener('click', e => {
    if (followers.classList.contains('hidden')) {
        followers.classList.remove('hidden')
    } else {
        followers.classList.add('hidden')
    }
})

});
