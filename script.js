new Swiper  ('.swiper', {
pagination:{
el:'.swiper-pagination',
clickable:true,
},
slidesPerView: "auto",
spaceBetween: 20,
});

var button = document.querySelector('.width-more768__button');
button.addEventListener('click', function () {
    if (document.querySelector(".width-more768__button").classList.contains("close")){
        button.classList.remove('close')
        button.classList.add('open');
        document.getElementById("text").innerHTML = "Скрыть";
    } else {
        button.classList.remove('open')
        button.classList.add('close');
        document.getElementById("text").innerHTML = "Показать всё";
    }
  });
