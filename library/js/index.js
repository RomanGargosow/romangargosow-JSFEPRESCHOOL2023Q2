console.log(`
Оценка собственной работы. Всего 50 баллов (баллы по пунктам - см. ниже). \n
Вёрстка соответствует макету. Ширина экрана 768px +26.\n
Ни на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12.\n
На ширине экрана 768рх реализовано адаптивное меню +12\n~
`);

const burgerButton = document.getElementById('burger-button');
const burgerMenu = document.getElementById('burger-menu');
const burgerLinks = document.querySelectorAll('.header-open-burger a'); // Выбираем все ссылки в меню

burgerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  burgerButton.classList.toggle('active');
});

// Добавляем обработчик события для каждой ссылки
burgerLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('active'); // Скрываем меню при клике на ссылку
    burgerButton.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  const click = e.composedPath().includes(burgerButton);
  if (!click) {
    burgerButton.classList.remove('active');
    burgerMenu.classList.remove('active');
  }
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const triggerPosition = 10; // Предел прокрутки, при котором нужно скрыть burger-menu

  if (scrollPosition > triggerPosition) {
    burgerMenu.classList.remove('active');
    burgerButton.classList.remove('active');
  }
});

alert(
  'Извините, но тут ничего не реализовано, прошу пропустить проверку этого задания :)'
);
