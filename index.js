// sliser(all slides in a container)
const slider = document.querySelector("slider");
// all trails
const trail = document.querySelector(".trail").querySelector("div");

let value = 0;
let trailValue = 0;
let interval = 4000;

const slide = (condition) => {
    clearInterval(start)
    condition === "increase" ? initiateINC() : initiateDEC()
    move(value, trailValue)
    Animate()
    start = setInterval(() => slide("increase"), interval)
}
// function for increase (forward, next) configuration
const initiateINC = () => {

}







// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('show')
//         }else{
//             entry.target.classList.remove('show')
//         }
//     })
// })

// const hiddenElements = document.querySelectorAll(".hidden");
// hiddenElements.forEach((el) => observer.observe(el))