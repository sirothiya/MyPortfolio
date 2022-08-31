/*var icon=document.getElementById("icon");
icon.onclick=function(){
	document.body.classList.toggle("dark-theme");
	if(document.body.classList.contains("dark-theme")){
icon.src="dark theme icon/sun.png";
	}
	else{
		icon.src="dark theme icon/moon.png";
	}
}*/

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
      const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/****=================popupicon=====================*********** */
let popup=document.getElementById('popupid');
function openPopup(){
  popup.classList.add("open-popup");
}

function closePopup(){
  popup.classList.remove("open-popup");
}

/******==========swiper js============****** */
var swiper = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true,
  
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*****======================navigation swiper js=================*** */
var swiper = new Swiper(".firstswiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*******=========preloader===========********** */
var loader=document.getElementById("preloader");
window.addEventListener("load" ,function(){
  loader.style.display="none";
})

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn1 = document.querySelector('.close-btn1');
const social_panel_container1 = document.querySelector('.social-panel-container1');

floating_btn.addEventListener('click', () => {
	social_panel_container1.classList.toggle('visible')
});

close_btn1.addEventListener('click', () => {
	social_panel_container1.classList.remove('visible')
});


//time button////
const time = document.querySelector('.time');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');
time.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});


        setInterval(updateTime, 1000);

        function updateTime() {
            tid.innerHTML = new Date();
        }

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work_container', {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 300
  }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
  linkWork.forEach(l=> l.classList.remove('active__work'))
  this.classList.add('active__work')
}
linkWork.forEach(l=> l.addEventListener('click', activeWork))


/*=============== MIXITUP FILTER PORTFOLIO ===============
let mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});*/
/******================MIXITUP JS============================****** 

$(document).ready(function(){
  $('.work__item').click(function(){
    const value=$(this).attr('.data-filter');
    if(value=='all'){
      $('.work__card').show('1000');
    }
    else{
      $('.work__card').not('.'+value).hide('1000');
      $('.work__card').filter('.'+value).show('1000');
    }
  })
  $('.work__item').click(function(){
    $(this).addclass('active_work').siblings().removeclass('active_work');
  })
})*/

/* Link active work 
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active__work'))
    this.classList.add('active__work');
}
linkWork.forEach(l=> l.addEventListener('click', activeWork));

*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)




/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
        spaceBetween: 24,
        loop: true,
        grabCursor: true,
        pagination: {
          el: ".pagination",
          clickable: true,
        },
        breakpoints: {
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        
        },
});


/*var swiper = new Swiper(".testimonial", {
  slidesPerView: 1,
 grabCursor:true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});*/
