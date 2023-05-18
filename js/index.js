const menu_btn = document.getElementById("mobile_btn"),
  nav = document.getElementById("nav");

const handleMenuClick = () => {
  nav.classList.toggle("hidden");
};

menu_btn.addEventListener("click", handleMenuClick);
