window.addEventListener('DOMContentLoaded', (event) => {
    const container = document.querySelector('.div__searchResults')

    container.addEventListener('click', async e => {
        let type = e.target.id.slice(0, 6)
        let userId = e.target.id.slice(6)
        let follow = document.querySelector(`#follow${userId}`)
        let unfollow = document.querySelector(`#unfoll${userId}`)

        if (type == 'follow') {
            follow.classList.add('hidden')
            unfollow.classList.remove('hidden')
            await fetch(`/Users/${userId}/follow`, { method: 'POST' })
        } else if (type == 'unfoll') {
            follow.classList.remove('hidden')
            unfollow.classList.add('hidden')
            await fetch(`/Users/${userId}/follow`, { method: 'DELETE' })
        }


    })


})
