     

        // ****In-Class Exercises (Monday, 01/27/2025)****


// ----


        1
// alert("Welcome to my website!")


// ----


        2
// const btn = document.querySelector('#btn')
// const wordsPlace = document.querySelector('#words-go-here')

// btn.addEventListener("click", clickHandler)

// function clickHandler () {
//         wordsPlace.textContent = "You clicked the button!"
//     }


// ----


        3
// const image1 = document.querySelector('#image-1')
// const image2 = document.querySelector('#image-2')
// const imagePlace = document.querySelector('#image-place')

// image1.addEventListener("click", image1clickHandler)
// image2.addEventListener("click", image2clickHandler)

// function image1clickHandler () {
//         imagePlace.src = "/Exercises(1-6)-In-Class-Group-Work/images/one.jpg"
//     }
// function image2clickHandler () {
//         imagePlace.src = "/Exercises(1-6)-In-Class-Group-Work/images/two.jpg"
// }


// ----


        4
const whatYouSaid = document.querySelector('#what-you-said')
const inputField = document.getElementById("myInput");
const value = inputField.value;

btn.addEventListener("click", clickHandler)

function clickHandler () {
        console.log(inputField.value);
        whatYouSaid.textContent = inputField.value
}


// ----


        5
