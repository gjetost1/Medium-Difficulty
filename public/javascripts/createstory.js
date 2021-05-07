window.addEventListener('DOMContentLoaded', (event) => {
    let select = document.querySelector("select")
    let img  = document.querySelector(".create__story__img")
    select.addEventListener('change', selectImgs)

    function selectImgs(){
        let choice = select.value;
        if(choice === '1') {
            img.src = "/storyImgs/mario.png"
        }
        if(choice === '2') {
            img.src = "/storyImgs/beetlejuice.png"
        }
        if(choice === '3') {
            img.src = "/storyImgs/boat.png"
        }
        if(choice === '4') {
            img.src = "/storyImgs/cabin.png"
        }
        if(choice === '5') {
            img.src = "/storyImgs/cardgame.png"
        }
        if(choice === '6') {
            img.src = "/storyImgs/castlevania.png"
        }
        if(choice === '7') {
            img.src = "/storyImgs/chess.png"
        }
        if(choice === '8') {
            img.src = "/storyImgs/dark.png"
        }
        if(choice === '9') {
            img.src = "/storyImgs/donkey.png"
        }
        if(choice === '10') {
            img.src = "/storyImgs/fight.png"
        }
        if(choice === '11') {
            img.src = "/storyImgs/flight.png"
        }
        if(choice === '12') {
            img.src = "/storyImgs/flintstones.png"
        }
        if(choice === '13') {
            img.src = "/storyImgs/food.png"
        }
        if(choice === '14') {
            img.src = "/storyImgs/football.png"
        }
        if(choice === '15') {
            img.src = "/storyImgs/megaman.png"
        }
        if(choice === '16') {
            img.src = "/storyImgs/mickey.png"
        }
        if(choice === '17') {
            img.src = "/storyImgs/nightmare.png"
        }
        if(choice === '18') {
            img.src = "/storyImgs/pinball.png"
        }
        if(choice === '19') {
            img.src = "/storyImgs/pirate.png"
        }
        if(choice === '20') {
            img.src = "/storyImgs/prince.png"
        }
        if(choice === '21') {
            img.src = "/storyImgs/punch.png"
        }
        if(choice === '22') {
            img.src = "/storyImgs/racing.png"
        }
        if(choice === '23') {
            img.src = "/storyImgs/rpg.png"
        }
        if(choice === '24') {
            img.src = "/storyImgs/rpg2.png"
        }
        if(choice === '25') {
            img.src = "/storyImgs/spaceshuttle.png"
        }
        if(choice === '26') {
            img.src = "/storyImgs/spyhunter.png"
        }
        if(choice === '27') {
            img.src = "/storyImgs/stage.png"
        }
        if(choice === '28') {
            img.src = "/storyImgs/starwars.png"
        }
        if(choice === '29') {
            img.src = "/storyImgs/uncles.png"
        }
        if(choice === '30') {
            img.src = "/storyImgs/wrestling.png"
        }
        if(choice === '31') {
            img.src = "/storyImgs/zorldo.png"
        }
    }


    const form = document.querySelector('.create__story__form')
    let title = document.querySelector('.create__story__title')
    let story = document.querySelector('.create__story__content')

    form.addEventListener('submit', async (e) => {
       if (!title.value) {
        alert("You must include a title, frend!")
        e.preventDefault()
       }
       if (!story.value) {
        alert("You must include some story content, frend!")
        e.preventDefault()
       }

    })



});
