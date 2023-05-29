let cards=[]
let sum = 0
let blackjack=false
let isalive =false
let message =""
let messagee = document.getElementById("para")
let esum = document.getElementById("summ")
let cardd = document.getElementById("cards")
let player ={
    name: "MY-SCORE:" ,
    money: 100
}
let playerdetail = document.getElementById("devv")
playerdetail.textContent= player.name+" "+"$"+player.money
function getrandomnum(){
let randnum= Math.floor(Math.random()*13)+1
if(randnum>10){
    return 10
}
else if(randnum===1){
    return 11
}
else{
    return randnum
}

}
// agar random number generate karna hoto uske lia ek 
// alag function banaenge aur usme Math.random number wala concept use krenge
// lekin decimal number nahi lene ke lia humlog Math.floor wala concept use krke call krrdenge
function startgame(){
    isalive=true
    let firstcard = getrandomnum()
let secondcard = getrandomnum()
 cards = [firstcard,secondcard]
 sum = firstcard+secondcard
    startgamee()
}

// sbse phle game me random number assign hone ke baad baar baar start game click nahi horha kyuki function call hone ke baad ruk jaa 
// usi value pe iske lia hum sare value ko function me laaenge 
// dusra out of game hone ke baad v new card option click horha to uske lia logical operators use krenge taki only sepcific
// condition pe chale
function startgamee(){
    cardd.textContent = "CARDS: "
    for(let i=0; i<cards.length; i+=1){
        cardd.textContent += cards[i] + " "
    }
    
    esum.textContent= "SUM: " + + sum
if(sum<=20){
    message= "Do you want to draw a new card ? 😀"
}
else if(sum===21){
    message = "wow you have got blackjacked ! 🤩"
blackjack=true
console.log(blackjack)
}
else{
    message ="Shitt you are out of the game ! 😑"
    isalive=false
}

messagee.textContent=message
}
function newcard(){
if(isalive===true && blackjack===false) {
    console.log("draw a new card from deck")
    let card=getrandomnum()
    sum+=card
    cards.push(card)
    console.log(cards)
    startgamee()
}
}
