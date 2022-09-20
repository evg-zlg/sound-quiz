const burgerIcon = document.querySelector(".menu__burger-icon");
burgerIcon.addEventListener("click", (e) => {
  burgerIcon.parentElement.childNodes[3].classList.add("menu_burger-open");
  document.querySelector(".header").childNodes[1].childNodes[1].childNodes[1].classList.add("logo_orange");
  document.querySelector(".menu_burger-open").addEventListener("click", (e) => {
    if (document.querySelector(".menu_burger-open")) {
      document.querySelector(".header").childNodes[1].childNodes[1].childNodes[1].classList.remove("logo_orange");
    document.querySelector(".menu_burger-open").classList.remove("menu_burger-open");
    }
  });
});

