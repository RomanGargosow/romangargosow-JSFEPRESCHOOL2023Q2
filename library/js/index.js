console.log(`
Оценка собственной работы. Всего 100 баллов (баллы по пунктам - см. ниже). \n
Вёрстка валидная +10.\n
Вёрстка семантическая +16.\n
Вёрстка соответствует макету +54\n
    блок <header> +8:\n
    секция Welcome +4.\n
    секция About +6:\n
    секция Favorites +8:\n
    секция CoffeShop +6.\n
    секция Contacts +6:\n
     секция LibraryCard +8:\n
     блок <footer> +8:\n
Общие требования к верстке +20\n
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
