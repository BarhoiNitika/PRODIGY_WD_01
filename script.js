script.js
const navigation = document.querySelector('.navigation');
const menuItems = document.querySelectorAll('.menu-item');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
});

menuItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.backgroundColor = '#555';
    item.style.color = '#fff';
  });

  item.addEventListener('mouseout', () => {
    item.style.backgroundColor = '';
    item.style.color = '';
  });
});
