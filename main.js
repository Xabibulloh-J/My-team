let elSiteHeader = document.querySelector(".site-header");
let elMenuBtn = document.querySelector(".js-header-btn");
let elMenuHeaderBtn = document.querySelector(".js-menu-btn");

elMenuBtn.addEventListener("click", function () {
  elSiteHeader.classList.add("open-menu");
  document.body.classList.add("unscrollbody");
});

elMenuHeaderBtn.addEventListener("click", function () {
  elSiteHeader.classList.remove("open-menu");
  document.body.classList.remove("unscrollbody");
});

// console.log(elDirectorsBtn);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//
//

// ALOXIDA CODE (O'TILMAGAN)

let elDirectorsBtn = document.querySelectorAll(".js-directions-btn");
let elDirectorsItems = document.querySelectorAll(".js-directions-items");

elDirectorsBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    elDirectorsItems.forEach((item, i) => {
      if (i === index) {
        item.classList.toggle("open");
      } else {
        item.classList.remove("open");
      }
    });
  });
});
