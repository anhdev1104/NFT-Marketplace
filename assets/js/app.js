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

// Nav Bars
const barsIcon = document.querySelector('.header__bars')
const overLine = document.querySelector('.overline')
const barsClose = document.querySelector('.header__menu-close')
const barsModal = document.querySelector('.header__menu-mobile')

function openModal() {
    overLine.style.display = 'block'
    barsModal.style.display = 'flex'
    barsModal.style.opacity = '1'
    barsModal.style.transform = 'translateX(0%)'
}

function closeModal() {
    barsModal.style.transform = 'translateX(100%)'
    barsModal.style.opacity = '0'
    overLine.style.display = 'none'
}

function closeOverLine() {
    overLine.style.display = 'none'
    barsModal.style.opacity = '0'
    barsModal.style.transform = 'translateX(100%)'
}

barsIcon.addEventListener('click', openModal)
overLine.addEventListener('click', closeOverLine)
barsClose.addEventListener('click', closeModal)
