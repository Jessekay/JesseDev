const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');
const menuLinks = offScreenMenu.querySelectorAll("li");
// const mediaLinks = mediaLinks.querySelector('.media');


    hamMenu.addEventListener('click', () => {
      hamMenu.classList.toggle('active');
      offScreenMenu.classList.toggle('active');
    });

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
        // mediaLinks.classList.remove('active');
      });
    });
