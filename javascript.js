const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".navMenu")

const ticketlist = document.querySelector(".openticketlist")
const form = document.querySelector(".ticketform")

const hamburger1 = document.querySelector(".hamburger1")
const form2 = document.querySelector(".ticketform")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

ticketlist.addEventListener("click", () => {
    ticketlist.classList.toggle("active");
    form.classList.toggle("active");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
})

hamburger1.addEventListener("click", () => {
    ticketlist.classList.remove("active");
    form2.classList.remove("active");
    navMenu.classList.remove("active");
})


function LoginButton() {
    window.location.href = "ReplicatedPage.html";
}

