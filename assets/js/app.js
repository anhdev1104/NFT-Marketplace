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
