window.addEventListener('DOMContentLoaded', (event) => {
    const likeButton = document.querySelector('#like-button')
    const dislikeButton = document.querySelector('#dislike-button')
    const likes = document.querySelector('.like__text')
    const info = document.querySelector('#info_input')

    console.log('bye')
    likeButton.addEventListener('click', async e => {
        console.log('hi')
        let likeNum = parseInt(likes.innerHTML.split(':')[1].slice(1),10)
        likeNum = likeNum + 1;
        likes.innerHTML = `Likes: ${likeNum}`
        likeButton.disabled = true;
        dislikeButton.disabled = false;
        let storyId = info.value
        await fetch(`/Stories/${storyId}/likes`, {
            method: 'POST'
        })
    })

    dislikeButton.addEventListener('click', async e=>{
        let likeNum = parseInt(likes.innerHTML.split(':')[1].slice(1),10)
        likeNum = likeNum - 1;
        likes.innerHTML = `Likes: ${likeNum}`
        likeButton.disabled = false;
        dislikeButton.disabled = true;
        let storyId = info.value
        await fetch(`/Stories/${storyId}/dislike`, {
            method: 'PUT'
        })
    })
});
