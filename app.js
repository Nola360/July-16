const popup_btn = document.querySelector('#open-popup-btn');

console.log(popup_btn);



popup_btn.addEventListener('click', function () {

  document.querySelector('.popup').classList.add('active');
  document.querySelector('#open-popup-btn').classList.add('active');



  console.log(123);
})


const dismiss_btn = document.getElementById('dismiss-popup-btn');

dismiss_btn.addEventListener('click', function () {
  document.querySelector('.popup').classList.remove('active');
  document.querySelector('#open-popup-btn').classList.remove('active');
  console.log(123);
})



