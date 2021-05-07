window.addEventListener('DOMContentLoaded', (event)=>{
    const follow = document.querySelector('#follow')
    const unfollow = document.querySelector('#unfollow')
    const userId = document.querySelector('.userID').value

    follow.addEventListener('click', async e=>{
        follow.classList.add('hidden')
        unfollow.classList.remove('hidden')
        await fetch(`/Users/${userId}/follow`, {method: 'POST'})
    })

    unfollow.addEventListener('click', async e=>{
        follow.classList.remove('hidden')
        unfollow.classList.add('hidden')
        await fetch(`/Users/${userId}/follow`, {method: 'DELETE'})
    })
})
