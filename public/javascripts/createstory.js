window.addEventListener('DOMContentLoaded', (event) => {
    let select = document.querySelector("select")
    let img  = document.querySelector(".create__story__img")
    select.addEventListener('change', selectImgs)

    function selectImgs(){
        let choice = select.value;
        if(choice === "/storyImgs/mario.png") {
            img.src = "/storyImgs/mario.png"
        }
        if(choice === "/storyImgs/beetlejuice.png") {
            img.src = "/storyImgs/beetlejuice.png"
        }
        if(choice === "/storyImgs/boat.png") {
            img.src = "/storyImgs/boat.png"
        }
        if(choice === "/storyImgs/cabin.png") {
            img.src = "/storyImgs/cabin.png"
        }
        if(choice === "/storyImgs/cardgame.png") {
            img.src = "/storyImgs/cardgame.png"
        }
        if(choice === "/storyImgs/castlevania.png") {
            img.src = "/storyImgs/castlevania.png"
        }
        if(choice === "/storyImgs/chess.png") {
            img.src = "/storyImgs/chess.png"
        }
        if(choice === "/storyImgs/dark.png") {
            img.src = "/storyImgs/dark.png"
        }
        if(choice === "/storyImgs/donkey.png") {
            img.src = "/storyImgs/donkey.png"
        }
        if(choice === "/storyImgs/fight.png") {
            img.src = "/storyImgs/fight.png"
        }
        if(choice === "/storyImgs/flight.png") {
            img.src = "/storyImgs/flight.png"
        }
        if(choice === "/storyImgs/flintstones.png") {
            img.src = "/storyImgs/flintstones.png"
        }
        if(choice === "/storyImgs/food.png") {
            img.src = "/storyImgs/food.png"
        }
        if(choice === "/storyImgs/football.png") {
            img.src = "/storyImgs/football.png"
        }
        if(choice === "/storyImgs/megaman.png") {
            img.src = "/storyImgs/megaman.png"
        }
        if(choice === "/storyImgs/mickey.png") {
            img.src = "/storyImgs/mickey.png"
        }
        if(choice === "/storyImgs/nightmare.png") {
            img.src = "/storyImgs/nightmare.png"
        }
        if(choice === "/storyImgs/pinball.png") {
            img.src = "/storyImgs/pinball.png"
        }
        if(choice === "/storyImgs/pirate.png") {
            img.src = "/storyImgs/pirate.png"
        }
        if(choice === "/storyImgs/prince.png") {
            img.src = "/storyImgs/prince.png"
        }
        if(choice === "/storyImgs/punch.png") {
            img.src = "/storyImgs/punch.png"
        }
        if(choice === "/storyImgs/racing.png") {
            img.src = "/storyImgs/racing.png"
        }
        if(choice === "/storyImgs/rpg.png") {
            img.src = "/storyImgs/rpg.png"
        }
        if(choice === "/storyImgs/rpg2.png") {
            img.src = "/storyImgs/rpg2.png"
        }
        if(choice === "/storyImgs/spaceshuttle.png") {
            img.src = "/storyImgs/spaceshuttle.png"
        }
        if(choice === "/storyImgs/spyhunter.png") {
            img.src = "/storyImgs/spyhunter.png"
        }
        if(choice === "/storyImgs/stage.png") {
            img.src = "/storyImgs/stage.png"
        }
        if(choice === "/storyImgs/starwars.png") {
            img.src = "/storyImgs/starwars.png"
        }
        if(choice === "/storyImgs/uncles.png") {
            img.src = "/storyImgs/uncles.png"
        }
        if(choice === "/storyImgs/wrestling.png") {
            img.src = "/storyImgs/wrestling.png"
        }
        if(choice === "/storyImgs/zorldo.png") {
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
