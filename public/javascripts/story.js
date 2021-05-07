window.addEventListener('DOMContentLoaded', (event) => {
    const likeButton = document.querySelector('#like-button')
    const dislikeButton = document.querySelector('#dislike-button')
    const likes = document.querySelector('.like__text')
    const info = document.querySelector('#info_input')
    const commentForm = document.querySelector('#comment__form')
    const commentBox = document.querySelector('#comment__box')
    let storyId = info.value
    const commentDelete = document.querySelector('.story__comments')
    const deleteStory = document.querySelector('#story__delete__button')


    likeButton.addEventListener('click', async e => {
        let likeNum = parseInt(likes.innerHTML.split(':')[1].slice(1), 10)
        likeNum = likeNum + 1;
        likes.innerHTML = `Likes: ${likeNum}`
        likeButton.disabled = true;
        dislikeButton.disabled = false;
        await fetch(`/Stories/${storyId}/likes`, {
            method: 'POST'
        })
    })

    dislikeButton.addEventListener('click', async e => {
        let likeNum = parseInt(likes.innerHTML.split(':')[1].slice(1), 10)
        likeNum = likeNum - 1;
        likes.innerHTML = `Likes: ${likeNum}`
        likeButton.disabled = false;
        dislikeButton.disabled = true;
        await fetch(`/Stories/${storyId}/dislike`, {
            method: 'PUT'
        })
    })

    commentForm.addEventListener('submit', async e => {
        e.preventDefault()
        let data = commentBox.value
        console.log(data, '<<<data')
        await fetch(`/Stories/${storyId}/comment`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment: data })
        }).then(r => console.log(r))
        e.target.submit()
    })

    if (commentDelete) {
        commentDelete.addEventListener('click', async e => {
            if (e.target.classList.contains('comment__delete__button')) {
                await fetch(`/Stories/${storyId}/deleteComment/${e.target.id}`, {
                    method: 'DELETE'
                })
                location.reload()
            }

        })
    }

    if (deleteStory) {
        deleteStory.addEventListener('click', async e => {
            await fetch(`/Stories/Delete/${storyId}`, {
                method: 'DELETE'
            })
            window.location.replace('/')
        })
    }


    const follow = document.querySelector('#follow')
    const unfollow = document.querySelector('#unfollow')
    const userId = document.querySelector('.userID').value

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

});
