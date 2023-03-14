
// nav area
window.addEventListener("DOMContentLoaded", function () {
    let menu = this.document.getElementById("navItems");
    menu.style.marginLeft = "-80%";
  });
  
  function showMenu() {
    let menu = document.getElementById("navItems");
    if (menu.style.marginLeft === "-80%") {
      menu.style.transition = " 0.5s";
      menu.style.marginLeft = "0%";
    } else {
      menu.style.marginLeft = "-80%";
    }
}
//   nav area end
  