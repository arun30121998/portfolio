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

//
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  const htmlPercentage = document.querySelector("#htmlpercentage");
  const cssPercentage = document.querySelector("#csspercentage");
  const jsPercentage = document.querySelector("#jspercentage");
  const bootstrapPercentage = document.querySelector("#bootstrappercentage");
  const photoshopPercentage = document.querySelector("#photopercentage");
  const contentPosition = box.getBoundingClientRect().top + window.scrollY;

  document.addEventListener("scroll", () => {
    const distance = contentPosition - window.scrollY;

    if (distance >= 5) {
      htmlPercentage.style.transition = "0.9s";
      htmlPercentage.style.transitionDelay = " 1s";
      htmlPercentage.style.width = "95%";
      //
      cssPercentage.style.transition = "0.9s";
      cssPercentage.style.transitionDelay = " 1.1s";
      cssPercentage.style.width = "90%";
      //
      jsPercentage.style.transition = "0.9s";
      jsPercentage.style.transitionDelay = " 1.2s";
      jsPercentage.style.width = "90%";
      //
      bootstrapPercentage.style.transition = "0.9s";
      bootstrapPercentage.style.transitionDelay = " 1.2s";
      bootstrapPercentage.style.width = "95%";
      //
      photoshopPercentage.style.transition = "0.9s";
      photoshopPercentage.style.transitionDelay = " 1.2s";
      photoshopPercentage.style.width = "60%";
    }
  });
});
