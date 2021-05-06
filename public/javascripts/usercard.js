window.addEventListener('DOMContentLoaded', (event)=>{
    const storyCardFollowButtons = document.querySelectorAll('.button__primary__follow')
    const storyCardUnFollowButtons = document.querySelectorAll('.button__primary__unfollow')

    async function followUser(follower, following){
        const response = await fetch('/users/follow', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({following_id: following, follower_id: follower})
        })
        const json = await response.json();
        if(json.success){
            updateFollow()
        }
        else{
            console.log('error')
        }
    }

    async function unfollowUser(follower, following){
        const response = await fetch('/users/unfollow', {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({following_id: following, follower_id: follower})
        })
        const json = await response.json();
        if(json.success){
            updateFollow()
        }
        else{
            console.log('error')
        }
    }

    async function updateFollow(){
        console.log('yehey')
    }

    storyCardFollowButtons.forEach(storyButtons=>{
        storyButtons.addEventListener('click', event=>{
                const button = event.target
                if(button.value){
                    const follower = button.value.split(' ')[1]
                    const following = button.value.split(' ')[0]
                    followUser(follower, following)
                }
        })
    })

    storyCardUnFollowButtons.forEach(storyButtons=>{
        storyButtons.addEventListener('click', event=>{
                const button = event.target
                if(button.value){
                    const follower = button.value.split(' ')[1]
                    const following = button.value.split(' ')[0]
                    followUser(follower, following)
                }
        })
    })
})
