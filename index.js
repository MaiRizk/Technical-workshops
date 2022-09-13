// Mobile navigation menu

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

const openMenu = document.getElementById("open");
openMenu.addEventListener("click", openNav);

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const closeMenu = document.getElementById("close");
closeMenu.addEventListener("click", closeNav)


