const helperInput = document.querySelector('#helper-input')
const item = document.querySelectorAll('.card-box')

const slidesCount = item.length;
let slideCounter = 0;

const qr = gsap.timeline()

const init = () => {

  
  window.onload = function() {
    // qr.from('.img-js', {scale: 15, duration: 2})
    qr.from('.title-a', {opacity: 0, y: 200, duration: 0.7})
    qr.from('.title-b', {opacity: 0, y: 50, duration: 0.7})
    qr.from('.title-c', {opacity: 0, y: 25, duration: 0.7})
    qr.from('.hero__el', {opacity: 0, y: 25, duration: 0.7})
    qr.from('.hero__el--arrow', {height: 0, y: 25, duration: 1 ,ease: "bounce.out"})
  };

  

    const showNextSlide = () => {
      if(slideCounter < slidesCount - 1) {
        item[slideCounter].classList.remove('card-box--active')
        slideCounter++
        item[slideCounter].classList.add('card-box--active')
      } else {
        document.querySelector('.footer').classList.remove('d-none')
      }

      if(slideCounter == 1) {
        console.log(slideCounter)
        qr.from('.index-about', {opacity: 0, y: 200, duration: 0.7})
        qr.from('.anime-1', {opacity: 0, y: 200, duration: 0.7})
        qr.from('.index-block--1', {opacity: 0, duration: 0.7})
      }
      if(slideCounter == 2) {
        console.log(slideCounter)
        document.querySelector('.anime-2').classList.remove('anime-2');
        // document.querySelector('.anime-2').style.border-rad;
        qr.to('.anime-2', {width: '100%', height: "90vh", borderRadius: "0", duration: 0.7, x: "250px", y:"-503px"})
        qr.from('.anime-3', {opacity: 0, y: 200, duration: 0.7})
        qr.from('.list-2__item', {opacity: 0, y: 200, duration: 0.7, stagger: .5 })
        qr.from('.anime-4', {opacity: 0, y: 200, duration: 0.7})
        

      }
      if(slideCounter == 3) {
        console.log(slideCounter)
        qr.from('.index-block--2', {opacity: 0, x: 200, duration: 0.7})
        qr.from('.anime-5', {opacity: 0, y: 200, duration: 0.7})
        qr.from('.list-3__item', {opacity: 0, y: 200, duration: 0.7, stagger: .5 })
        qr.from('.anime-6', {opacity: 0, y: 200, duration: 0.7})

      }
      if(slideCounter == 4) {
        qr.from('.index-block--3', {opacity: 0, x: -200, duration: 0.7})
        qr.from('.anime-7', {opacity: 0, y: 200, duration: 0.7})
        qr.from('.list-4__item', {opacity: 0, y: 200, duration: 0.7, stagger: .5 })
        qr.from('.anime-8', {opacity: 0, y: 200, duration: 0.7})
      }
      if(slideCounter == 5) {
        qr.from('.index-benefits', {opacity: 0, x: 200, duration: 0.7})
        qr.from('.index-benefits__item', {opacity: 0, x: 50, stagger: .5, duration: 0.7})

      }
      if(slideCounter == 6) {
        qr.from('.index-services', {opacity: 0, x: -200, duration: 0.7})
        
        const clickBtn = () => {
            document.querySelector('.services-block__nav-btn-r').click()
        }

        setTimeout(clickBtn, 1000);
        setTimeout(clickBtn, 2000);
      }
      if(slideCounter == 7) {
        qr.from('.index-mission', {opacity: 0, y: 200, duration: 0.7})
        setTimeout(document.querySelector('.index-mission__text-animate--1').classList.add('anime-9'), 
        2000);
      }

    };
    const showPrevSlide = () => {
      if(slideCounter > 0) {
        item[slideCounter].classList.remove('card-box--active')
        slideCounter--
        item[slideCounter].classList.add('card-box--active')
      } else {
        console.log('start')
      }
      if(slideCounter == 1) {
        console.log('1')
      }
      if(slideCounter == 2) {
        console.log('2')
      }
      
    };

    if(window.innerWidth >= 768) {
        window.addEventListener('wheel', (e) => {

            let delta = -e.deltaY;

            if(delta > 0) {
                if(helperInput.value == '1') {
                    helperInput.value = 0;
                    showPrevSlide();
                    
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500);
                }
            } else {
                if(helperInput.value == '1') {
                    helperInput.value = 0;
                    showNextSlide();
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500);
                }
            }
        });
    } else {
        document.addEventListener('swipe-left', () => {
            showNextSlide();
        })
        document.addEventListener('swipe-right', () => {
            showNextSlide();
        })
    }
};

init();