const menu = document.getElementById('hamburger-menu')
const hamburger = document.getElementById('hamburger')

menu.addEventListener('click', function (e) {
    hamburger.classList.toggle('hidden')
})