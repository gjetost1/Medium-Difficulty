window.addEventListener('DOMContentLoaded', (event) => {



    const followersButton = document.querySelector('.follower__button')
    const followers = document.querySelectorAll('.follower__div')
    let clicked = false;

    followersButton.addEventListener('click', e => {
        if (!clicked) {
            followers.forEach(a => {
                a.classList.remove('hidden')
            })
            clicked = true;
        } else {
            followers.forEach(a => {
                a.classList.add('hidden')
            })
            clicked = false;
        }
    })

    const follow = document.querySelector('#follow')
    const unfollow = document.querySelector('#unfollow')
    let userId = document.querySelector('.userID')
    if (userId) {
        userId = userId.value
    }

    if (follow) {
        follow.addEventListener('click', async e => {
            follow.classList.add('hidden')
            unfollow.classList.remove('hidden')
            await fetch(`/Users/${userId}/follow`, { method: 'POST' })
        })

        unfollow.addEventListener('click', async e => {
            follow.classList.remove('hidden')
            unfollow.classList.add('hidden')
            await fetch(`/Users/${userId}/follow`, { method: 'DELETE' })
        })
    }

});
