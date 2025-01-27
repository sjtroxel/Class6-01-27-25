    
    // In-Class Lecture Notes (Monday 01/27/25)


// -----


// const iBtn = document.querySelector('#iBtn');
// const dBtn = document.querySelector('#dBtn');
// const countInsert = document.querySelector("#insert-count")

// iBtn.addEventListener('click', clickIncreaseCountHandler);
// dBtn.addEventListener('click', clickDecreaseCountHandler);


// let count = 0

// function clickIncreaseCountHandler () {
//     count++
//     console.log(count)
//     countInsert.textContent = count
// }
// function clickDecreaseCountHandler () {
//     count--
//     console.log(count)
//     countInsert.textContent = count
// }

// -----

let quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Change your thoughts and you change your world.",
    "The best way to predict the future is to create it.",
]

const btn = document.querySelector('#btn')
const quotePlace = document.querySelector('#quote-goes-here')

btn.addEventListener("click", clickHandler)

function clickHandler () {
    let randomNumber = Math.floor(Math.random() * quotes.length)
    console.log(quotes[randomNumber])
    quotePlace.textContent = quotes[randomNumber]
}