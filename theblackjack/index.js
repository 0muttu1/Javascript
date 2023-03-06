
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message =""
let messageEl=document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

////////////object player key and value like maps in cpp//////////////////
let player = {
name : "Chanvir",
chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent=playerName + ": " + "$" +playerChips
///////////////////////////////////////////////////////////////////////
function startgame(){
    isAlive = true
    let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards=[firstCard, secondCard]
sum = firstCard + secondCard

    rendergame()
}
//////////////////////////////////////////////////////////////
function getRandomCard(){
    let retnum = Math.ceil(Math.random()*13)
    if(retnum ===1)
    {
        return 11;
    }
    else if(retnum >10)
    {
        return 10;
    }
    else{
        return retnum;
    }
}

////////////////////////////////////////////////////////////////////
function rendergame(){
cardEl.textContent ="Cards: "
for(let i=0;i<cards.length;i++)
{
    cardEl.textContent +=cards[i]+ " "
}
    sumEl.textContent ="Sum: " +sum;
if (sum <= 20) {
    message="Do you want a new card?"
    
} else if (sum === 21) {
    hasBlackJack=true
    message="You've a black jack!"
    
} else {
    message="We are logging out"
    isAlive=false
    
}
messageEl.textContent = message;
}
////////////////////////////////////////////////////////////////////////
function newcard()
{
    if(isAlive===true && hasBlackJack===false) 
    {
    let card = getRandomCard()
    cards.push(card);
    sum+=card;
    rendergame();
    }
}