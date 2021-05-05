window.addEventListener('DOMContentLoaded', (event) => {


const profilePopout = document.querySelector('#profile__popout')
const profileButton = document.querySelector('#navbar__profile__button')
const userId = document.querySelector('#user__id__holder').innerHTML

profileButton.addEventListener('click', e => {
    if (profilePopout.classList.contains('hidden')){
        profilePopout.classList.remove('hidden')
    } else {
        window.location = `/Users/${userId}`
    }

})

document.addEventListener('click', e => {
    if (!e.target.classList.contains('ignoreClick') && !profilePopout.classList.contains('hidden')){
        profilePopout.classList.add('hidden')
    }
})


});
