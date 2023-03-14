function showMenu() {
  let mediaQuery = window.matchMedia("(max-width:800px)");
  let navItems = document.querySelector(".nav-items");

  if (navItems.style.left === "0%") {
    navItems.style.left = "-100%";
  } else {
    navItems.style.left = "0%";
  }

  if (!mediaQuery.matches) {
    navItems.style.left = "-100%";
  }
}

// animation text slice start
function pageLoad() {
  let myRoles = [
    "iam a Designer",
    "iam a web developer",
    "iam an front end developer",
    "iam a react developer",
    "iam a web application developer",
  ];

  let storeValue = document.getElementById("role");

  let index = 0;

  setInterval(function () {
    storeValue.innerHTML = myRoles[index];
    index = (index + 1) % myRoles.length;
  }, 5000);
}

// say hi start
window.addEventListener("DOMContentLoaded", function () {
  let hai = document.getElementById("respond-text");
  hai.style.transition = "0.9s";
  hai.style.opacity = "0";
  hai.style.transitionDelay = "1s";
});
function sayHai() {
  let hai = document.getElementById("respond-text");
  hai.style.opacity = "1";

  hai.innerHTML = "hai welcome dude ...";

  setTimeout(function () {
    hai.innerHTML = "";
  }, 3000);
  return function () {
    return (hai.style.opacity = "0");
  };
}


//

