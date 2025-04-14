// -----头部-----
// 1.增加下划线
let nav = document.querySelector('nav')
let navLi = document.querySelectorAll('ul li')
// let line = document.querySelector('.line')
navLi.forEach((item, index) => {
    item.addEventListener('mouseenter', function () {
        let line = document.createElement('div')
        nav.appendChild(line)
        line.classList.add('line')

        line.style.width = `${item.offsetWidth}px`;
        line.style.transform = `translateX(${item.offsetLeft}px)`;
    })

    // item.addEventListener('mouseleave', function () {
    //     const line = document.querySelector('.line')
    //     if (line) { // 确保.line元素存在
    //         nav.removeChild(line);
    //     }
    // })
})

const wLine = document.querySelector('.line')
navLi.forEach((item, index) => {
    wLine.classList.remove('line')
    item.addEventListener('mouseleave', function () {
        // wLine.style.width = '0px'
        const line = document.querySelector('.line')
        if (line) { // 确保.line元素存在
            nav.removeChild(line);
        }
    })
})




//轮播图
let sDiv = document.querySelectorAll('.center>div')
console.log(sDiv);
let swiper = document.querySelectorAll('.swiper div')
console.log(swiper);
swiper.forEach((item, index) => {
    item.addEventListener('click', function () {
        //移除原有样式
        const now = document.querySelector('.active')
        now.classList.remove('active')
        this.classList.add('active')
        this.style.display = 'block'

        // 控制轮播切换
        for (let i = 0; i < sDiv.length; i++) {
            sDiv[i].style.display = 'none'
            sDiv[index].style.display = 'block'
        }
    })
})


