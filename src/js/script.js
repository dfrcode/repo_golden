const copyright = document.querySelector('.box_copyright')
copyright.innerHTML = `<p>&copy;Copyright ${new Date().getFullYear()} FreebiesXpress.com</p>`

const btn = document.querySelector('.burger_btn')
const menu = document.querySelector('.burger_menu')

btn.addEventListener('click', () => {
    if (menu.classList.length <= 1) {
        menu.classList.add('active')
    } else if (menu.classList.length > 1) {
        menu.classList.remove('active')
    }
})

menu.addEventListener('click', () => {
    menu.classList.remove('active')
})