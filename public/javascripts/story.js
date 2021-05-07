window.addEventListener('DOMContentLoaded', (event) => {
    const likeButton = document.querySelector('#like-button')
    const dislikeButton = document.querySelector('#dislike-button')
    const likes = document.querySelector('.like__text')
    const info = document.querySelector('#info_input')
    const commentForm = document.querySelector('#comment__form')
    const commentBox = document.querySelector('#comment__box')
    let storyId = info.value
    const commentDelete = document.querySelector('.comment__delete')

    const followTitle = document.querySelector('.follow__title')
    const followButton = document.querySelector('.follow__button')
    const unfollowButton = document.querySelector('.unfollow__button')
    const followInfoLabel = document.querySelector('.label__follow__info')
    let hiddenLabelData = followInfoLabel.innerHTML

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
            await fetch(`/Stories/${storyId}/deleteComment/${e.target.id}`, {
                method: 'DELETE'
            })
            location.reload()
        })
    }

    // follow
    async function isFollowing(hiddenLabelData){
        const user_id = parseInt(hiddenLabelData.split(' ')[0])
        const author_id = parseInt(hiddenLabelData.split(' ')[1])

        const follow = document.createElement('button')
        const unfollow = document.createElement('button')

        const response = await fetch('/users/followers',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user_id: user_id })
        })

        const json = await response.json()
        let following = false

        if(json.following.length){

            json.following.forEach(e =>{
                if(e === author_id) {
                    following = true
                }
            })
            if(following){
                follow.classList.add('follow__button')
                follow.classList.add('hidden')
                follow.innerHTML = 'Follow'

                unfollow.classList.add('unfollow__button')
                unfollow.innerHTML = 'Unfollow'

                followTitle.appendChild(unfollow)
                followTitle.appendChild(follow)
            }
            else{
                follow.classList.add('follow__button')
                follow.innerHTML = 'Follow'

                unfollow.classList.add('unfollow__button')
                unfollow.classList ='hidden'
                unfollow.innerHTML = 'Unfollow'

                followTitle.appendChild(unfollow)
                followTitle.appendChild(follow)
            }
        }
    }

    isFollowing(hiddenLabelData)

    async function actionFollow(user_id, action){
        const response = await fetch('/users/follow',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify({ follower_user_id: follower_user_id, following_user_id: following_user_id })
        })
    }

    followButton.addEventListener('click', event=>{
        const button = event.target
        const action = 'follow'

    })
});
