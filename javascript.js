const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navMenu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})


const ticketlist = document.querySelector(".openticketlist")
const form = document.querySelector(".ticketform")

ticketlist.addEventListener("click", () => {
    ticketlist.classList.toggle("active");
    form.classList.toggle("active");
}) 
