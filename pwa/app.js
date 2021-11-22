document.addEventListener('DOMContentLoaded', () =>{

    //Cards
    const cardsArray = [
        {
            name:'Iron',
            img:'cards/Iron.png'
        },
        {
            name:'Iron',
            img:'cards/Iron.png'
        },
        {
            name:'Gold',
            img:'cards/Gold.png'
        },
        {
            name:'Gold',
            img:'cards/Gold.png'
        },
        {
            name:'Diamond',
            img:'cards/Diamond.png'
        },
        {
            name:'Diamond',
            img:'cards/Diamond.png'
        },
        {
            name:'Lazuli',
            img:'cards/Lazuli.png'
        },
        {
            name:'Lazuli',
            img:'cards/Lazuli.png'
        },
        {
            name:'Redstone',
            img:'cards/Redstone.png'
        },
        {
            name:'Redstone',
            img:'cards/Redstone.png'
        },
        {
            name:'Emerald',
            img:'cards/Emerald.png'
        },
        {
            name:'Emerald',
            img:'cards/Emerald.png'
        },
    ]
    //Board
    
    const board = document.querySelector('.board')
    
    function generateBoard() {
        for (let i = 0; i < cardsArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'cards/Stone.png')
            card.setAttribute('class', 'card')
            card.setAttribute('style', 'height: 125px; width: 125px;')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            board.appendChild(card)
        }
    }

    //flip the cards
    cardsChosen = []
    chosenCardId = []
    cardsWon = []

    function flipCard(){

        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardsArray[cardId].name)
        chosenCardId.push(cardId)
        this.setAttribute('src', cardsArray[cardId].img)

        if (cardsChosen.length === 2) {
            
            setTimeout(checkForMatch, 500)
        }
    }

    //Check for matches
    function checkForMatch(){

        let cards = document.querySelectorAll('img')
        const cardOneId = chosenCardId[0]
        const cardTwoId = chosenCardId[1]

        if( cardsChosen[0] === cardsChosen[1] ){
            cards[cardOneId].setAttribute('src', 'cards/Chest.png')
            cards[cardTwoId].setAttribute('src', 'cards/Chest.png')
            cardsWon.push(cardsChosen)
        }else{
            cards[cardOneId].setAttribute('src', 'cards/Stone.png')
            cards[cardTwoId].setAttribute('src', 'cards/Stone.png')
        }

        cardsChosen = []
        chosenCardId = []

        if(cardsWon.length === cardsArray.length/2){
            if(confirm('Congratulations! Click "OK" to play again')){
                document.querySelectorAll('.card').forEach(function(a) {
                    a.remove()
                  })
                  cardsWon = []
                  cardsArray.sort(() => 0.5 - Math.random())
                  generateBoard()
            }
        }
    }



    cardsArray.sort(() => 0.5 - Math.random())
    generateBoard()
})





