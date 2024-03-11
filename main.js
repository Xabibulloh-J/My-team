var elSiteHeader = document.querySelector(".site-header");
var elMenuBtn = document.querySelector(".js-header-btn");
var elMenuHeaderBtn = document.querySelector(".js-menu-btn");

elMenuBtn.addEventListener("click", function(){

   elSiteHeader.classList.add("open-menu");
   document.body.classList.add("unscrollbody");

});

elMenuHeaderBtn.addEventListener("click", function(){

   elSiteHeader.classList.remove("open-menu");
   document.body.classList.remove("unscrollbody");

});