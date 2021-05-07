window.addEventListener('DOMContentLoaded', (event)=>{
    const storyCardFollowButtons = document.querySelectorAll('.button__primary__follow')
    const storyCardUnFollowButtons = document.querySelectorAll('.button__primary__unfollow')

    async function followUser(follower, following, targetButton){
        const response = await fetch('/users/follow', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({following_id: following, follower_id: follower})
        })
        const json = await response.json();
        if(json.success){
            updateFollow(targetButton)
        }
        else{
            console.log('error')
        }
    }

    async function unfollowUser(follower, following, targetButton){
        const response = await fetch('/users/unfollow', {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({following_id: following, follower_id: follower})
        })
        const json = await response.json();
        if(json.success){
            updateFollow(targetButton)
        }
        else{
            console.log('error')
        }
    }

    async function updateFollow(targetButton){
        const buttonId = targetButton.split(' ')[0]
        const storyCardFollowButton = document.getElementById(`${buttonId} followButton`)
        const storyCardUnFollowButton = document.getElementById(`${buttonId} unfollowButton`)

        if(targetButton.split(' ')[1] === 'followButton'){

            storyCardFollowButton.classList.add('button__primary--hidden')
            storyCardUnFollowButton.classList.remove('button__primary--hidden')

        } else if(targetButton.split(' ')[1] === 'unfollowButton') {

            storyCardFollowButton.classList.remove('button__primary--hidden')
            storyCardUnFollowButton.classList.add('button__primary--hidden')

        }
    }

    storyCardFollowButtons.forEach(storyButtons=>{
        storyButtons.addEventListener('click', event=>{
                const button = event.target
                const targetButton = button.id
                if(button.value){
                    const follower = button.value.split(' ')[1]
                    const following = button.value.split(' ')[0]
                    followUser(follower, following, targetButton)
                }
        })
    })

    storyCardUnFollowButtons.forEach(storyButtons=>{
        storyButtons.addEventListener('click', event=>{
                const button = event.target
                const targetButton = button.id
                if(button.value){
                    const follower = button.value.split(' ')[1]
                    const following = button.value.split(' ')[0]
                    unfollowUser(follower, following, targetButton)
                }
        })
    })
})
