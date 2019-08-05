
// Подключение карты

  ymaps.ready(init);
  var myMap;

  function init(){
    myMap = new ymaps.Map ("map", {
      center: [59.933429, 30.321869],
      zoom: 13
    });

    myPlacemark = new ymaps.Placemark([59.936479, 30.341230], {
      hintContent: '"Метро"',
      balloonContent: 'Вход c Манежной'
    });

    myMap.geoObjects.add(myPlacemark);
  }

  // РАБОТА БУРГЕРА

  const burgerBtn = document.querySelector('.burger');
  const mainNav = document.querySelector('.main-nav');

  burgerBtn.addEventListener('click', openMenu);

  function openMenu () {
    mainNav.classList.toggle('main-nav--open');
    burgerBtn.classList.toggle('burger--close');
  };

