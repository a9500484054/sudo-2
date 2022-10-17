const helperInput = document.querySelector('#helper-input')
const item = document.querySelectorAll('.card-box')
console.log('массив', item)
const slidesCount = item.length;
let slideCounter = 0;
let bool = 0
const qr = gsap.timeline()

function test() {
  document.querySelector('footer').scrollIntoView({block: "end"})
}


const init = () => {
  window.onload = function() {
    console.log('размер', window.innerWidth)
    // if(window.innerWidth >= 1440) {
    //   document.querySelector('.hero__img').classList.remove('d-none')
    //   qr.from('.img-js', 3, {scale: 25, duration: 2, y: "-2661px", x: "-1830px"})
    // }
    qr.from('.hero__title', {opacity: 0, y: "-50", duration: 0.7, stagger: .5 })
    qr.from('.hero__el', {opacity: 0, y: 25, duration: 0.7})
    qr.from('.hero__el--arrow', {height: 0, y: 25, duration: 1 ,ease: "bounce.out"})
  };

  const showNextSlide = () => {
    if(slideCounter < slidesCount - 1) {
      console.log(slideCounter)
      item[slideCounter].classList.remove('card-box--active')
      slideCounter++
      item[slideCounter].classList.add('card-box--active')
    } else if(slideCounter == Infinity) {
      document.querySelector('.footer').classList.remove('d-none')
      document.querySelector('body').classList.remove('body--hidden')
      item.forEach(el => {
        el.classList.remove('card-box--active')
        el.classList.add('card-box--default')
      })
    }
    if(bool == 0) {
      document.querySelector('.index-services').scrollIntoView({block: "start"})
      bool++
    }
      
    if(slideCounter == 1) {
      console.log(slideCounter)
      // document.querySelector('.hero__img').style.display = "none"
      qr.to('.hero', .5, {opacity: 0, y: -1000, duration: 0.7})
      qr.fromTo('.index-about', .5, {opacity: 0, x: -1000, duration: 0.4}, {opacity: 1, x: 0, duration: 0.4})  
      qr.from('.elem-a1', .5, {opacity: 0, y: 50, duration: 0.7})     
    } 
    if(slideCounter == 2) {
      console.log(slideCounter)
      qr.from('.swiper-box', {opacity: 1, y: 1000, duration: 0.4})
      qr.from('.elem-a2', {opacity: 0, y: 200, duration: 0.4})
      qr.from('.card-box__item-1', {opacity: 0, y: 50, duration: 0.4, stagger: .5 })
      qr.from('.elem-a3', {opacity: 0, scale: 0, duration: 0.4})
    }

    if(slideCounter == 3) {
      console.log(slideCounter)
      qr.from('.index-benefits', {opacity: 1, y: 1000, duration: 0.7})
      qr.from('.index-benefits__item', {opacity: 0, x: 200, duration: 0.7, stagger: .5 })
      qr.to('.elem-a10', {y: -50, duration: 0.7 })
      qr.to('.elem-a9', {y: -80, duration: 0.7 })
      qr.to('.elem-a8', {y: -50, duration: 0.7 })
      qr.from('.elem-a10', {y: 0, duration: 0.7 })
      qr.from('.elem-a9', {y: 0, duration: 0.7 })
      qr.from('.elem-a8', {y: 0, duration: 0.7 })
      
    }

    if(slideCounter == 4) {
      slideCounter = Infinity;
      document.querySelector('.footer').classList.remove('d-none')
      document.querySelector('body').classList.remove('body--hidden')
      item.forEach(el => {
        el.classList.remove('card-box--active')
        el.classList.add('card-box--default')
      })
      document.querySelector('.index-services').scrollIntoView({block: "start"})
      console.log(slideCounter)
    }

    if(slideCounter == 5) {
      console.log(slideCounter)
     
    }

    if(slideCounter == 6) {
      console.log(slideCounter)
    }
    if(slideCounter == 7) {
      console.log(slideCounter)
    }

  };
  
  const showPrevSlide = () => {
    if(slideCounter > 0) {
      if(slideCounter !== Infinity) {
        item[slideCounter].classList.remove('card-box--active')
        slideCounter--
        item[slideCounter].classList.add('card-box--active')
        console.log(slideCounter)
      }
    }
    if(slideCounter == 0) {
      console.log(slideCounter)
      console.log(slideCounter)
      qr.to('.hero', 1, {opacity: 1, y: 0, duration: 0.7})
      qr.fromTo('.index-about', 1, {opacity: 1, x: 0}, {opacity: 0, x: -1000})
      document.querySelector('.index-block--1').classList.remove('animate-3')
      document.querySelector('.index-block--1 .container').classList.remove('d-none')
      
    }
    if(slideCounter == 1) {
      console.log(slideCounter)
    }
    if(slideCounter == 2) {
      console.log(slideCounter)
    }

  };



  if(window.innerWidth >= 1280) {
    window.addEventListener('wheel', (e) => {

        let delta = -e.deltaY;

        if(delta > 0) {
            if(helperInput.value == '1') {
                helperInput.value = 0;
                showPrevSlide();
                
                setTimeout(() => {
                    helperInput.value = 1;
                }, 2500);
            }
        } else {
            if(helperInput.value == '1') {
                helperInput.value = 0;
                showNextSlide();
                setTimeout(() => {
                    helperInput.value = 1;
                }, 2500);
            }
        }
    });
  }


}

init()

