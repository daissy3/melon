

// 화살표 보이는거
const home = document.querySelector('.header_main');
const homeHeight = home.getBoundingClientRect().height;

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', function(){
  if (window.scrollY > homeHeight / 4) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

// arrow click
const PBTN = document.querySelector('#pbtn');
PBTN.addEventListener('click', function(){
  $('.fa-compact-disc').toggleClass('disc');
});
