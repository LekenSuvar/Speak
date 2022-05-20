// Custom Scripts
const usa = document.querySelector('.flag__usa');
const russia = document.querySelector('.flag__ru');
const lang = document.querySelector('.lang');
const lab = document.querySelector('.labels');

lang.addEventListener('change', function(){
    if(lang.selectedIndex == 0){
        russia.classList.remove('selected');
        usa.classList.add('selected');
    }
    if(lang.selectedIndex == 1){
        usa.classList.remove('selected');
        russia.classList.add('selected');
    }
});

lab.addEventListener('click', function(){
    if(window.innerWidth < 767.98 && usa.classList.contains('selected')){
        usa.classList.remove('selected');
        russia.classList.add('selected');
    }
    else if(window.innerWidth < 767.98 && russia.classList.contains('selected')){
        russia.classList.remove('selected');
        usa.classList.add('selected');
    }
});
// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 767.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('header')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)
  
const btn = document.querySelector('.action__button');

window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth < 767.98) {
        btn.innerHTML = 'Начать беседу';
    }
    else{
        btn.innerHTML = 'Войти';
    }
})
// const videoBg = document.querySelector('.app__video-bg');
const iframe = document.querySelector('.app__iframe');
const ytIcon = document.querySelector('.app__yt');

ytIcon.addEventListener('click', () =>{
    videoBg.style.display = 'none';
    ytIcon.style.display = 'none';
    iframe.classList.add('play');
});
const list = document.querySelector('.list'),
    items = document.querySelectorAll('.slider__item')
listItems = document.querySelectorAll('.list__item')

function filter() {
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        const target = event.target

        if (target.classList.contains('list__item')) {
            listItems.forEach(listItem => listItem.classList.remove('active'))
            target.classList.add('active')
        }


        switch (targetId) {
            case 'all':
                getItems('slider__item')
                break
            case 'feeling':
                getItems(targetId)
                break
            case 'loneliness':
                getItems(targetId)
                break
            case 'bad-habit':
                getItems(targetId)
                break
            case 'relations':
                getItems(targetId)
                break
        }
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

/*SLIDER */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    breakpoints: {
        1024: {
            slidesPerView: 5,
        },
        860: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3.5,
        },
        565: {
            slidesPerView: 2.5,
        },
        480: {
            slidesPerView: 2.0,
        },
        0: {
            slidesPerView: 1
        }

    },

    mousewheel: {
        invert: true,
    }

});
function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector)
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none'
        });
        tab.forEach(item => {
            item.classList.remove(activeClass)
        });
    }
    function showTabContent(i = 0) {
       content[i].style.display = display
       tab[i].classList.add(activeClass)
    }
    hideTabContent()
    showTabContent()
    header.addEventListener('click', e => {
        const target = e.target
        if (target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if ( target == item || target.parentNode == item ) {
                    hideTabContent()
                    showTabContent(i)
                }
            });
        }
    })
}

// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.
// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.
// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.
// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.
tabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active')
const btnMinus = document.querySelector('.favor__minus');
const btnPlus = document.querySelector('.favor__plus');
const amount = document.querySelector('.favor__amount');
const price = document.querySelector('.favor__price');
const min = document.querySelector('.favor__min');

btnMinus.addEventListener('click', () =>{
    let saveAmount = Number(amount.textContent);
    if(saveAmount === 20){
        return amount.innerHTML = '20';
    }
    // let savePrice = Number(price.textContent)
    let savePrice = saveAmount - 1;
    amount.innerHTML = String(saveAmount - 1);
    price.innerHTML = String(savePrice*49);
});
btnPlus.addEventListener('click', () =>{
    let saveAmount = Number(amount.textContent);
    let savePrice = saveAmount + 1;
    amount.innerHTML = String(saveAmount + 1);
    price.innerHTML = String(savePrice*49);
});

min.addEventListener('click', () =>{
    amount.innerHTML = '20';
    price.innerHTML = '980';
});
