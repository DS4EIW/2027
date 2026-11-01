/* Navigation is present in HTML and remains usable without JavaScript. */
(function () {
  "use strict";
  var button = document.querySelector(".menu-button");
  var menu = document.getElementById("main-menu");
  if (!button || !menu) return;
  document.body.classList.add("nav-ready");
  function closeMenu() {
    menu.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  }
  button.addEventListener("click", function () {
    var open = menu.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
      button.focus();
    }
  });
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".menu")) closeMenu();
  });
  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu();
  });
  var current = location.pathname.split("/").pop() || "index.html";
  var active = menu.querySelector('a[href="' + current + '"]');
  if (active) active.setAttribute("aria-current", "page");
})();
