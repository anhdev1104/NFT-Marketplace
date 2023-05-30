// Xử lí header khi sự kiện scroll diễn ra
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header__top')
    const scrolled = window.scrollY
    
    if (scrolled > 0) {
        header.style.backgroundColor = 'rgba(3, 3, 3, 0.92)'
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
})

// Tab UI nav header
const tabs = document.querySelectorAll('.header__menu-item')
const line = document.querySelector('.line')
const logo = document.querySelector('.header__logo')
const tabActive = document.querySelector('.header__menu-item.invalid-nav')

requestIdleCallback(function () {
    line.style.left = tabActive.offsetLeft + 'px'
    line.style.width = tabActive.offsetWidth + 'px'
})

logo.onclick = function () {
    line.style.left = tabActive.offsetLeft + 'px'
    line.style.width = tabActive.offsetWidth + 'px'
    tabs[0].classList.add('active')
}

tabs.forEach((tab) => {
    tab.onclick = function() {
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        this.classList.add('invalid-nav')
    }
})


