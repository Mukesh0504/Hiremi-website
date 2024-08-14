// for side nav bar
const doctToRight = document.querySelector("#dock-to-left")
const sideNav = document.querySelector(".side-navbar-container")
const sideNavOption = document.querySelectorAll(".side-navbar-container li a span")
console.log(doctToRight);
console.log(sideNav);
console.log(sideNavOption);

function displayNone() {
    sideNavOption.forEach((span) => {
        span.style.display = "none"
    })
}
function displayBlock() {
    sideNavOption.forEach((span) => {
        span.style.display = "block"
    })
}

doctToRight.addEventListener("click", () => {
    if (sideNav.style.width === "60px") {
        sideNav.style.width = "20%"
        displayBlock()
    }
    else {
        sideNav.style.width = "60px"
        displayNone()

    }
})