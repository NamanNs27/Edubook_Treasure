'use strict';



/**
 * add event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toogle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);



/**
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);



/**
 * filter functionality
 */

const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedBtn = filterBtn[0];

const filter = function () {
  lastClickedBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (filterItems[i].dataset.filter === this.dataset.filterBtn) {
      filterItems[i].style.display = "block";
    } else {
      filterItems[i].style.display = "none";
    }
  }
}

addEventOnElem(filterBtn, "click", filter);

/**
 * search functionality (chatgpt se maine add ki )
 */

const searchInput = document.querySelector("[data-search-input]");  // Select the search input field
const searchItems = document.querySelectorAll("[data-filter]");    // Select all the items to be searched

const search = function () {
  const searchTerm = searchInput.value.toLowerCase();  // Get the search input value and convert to lowercase for case-insensitive search

  for (let i = 0; i < searchItems.length; i++) {
    const itemName = searchItems[i].textContent.toLowerCase();  // Convert each item's text to lowercase for case-insensitive comparison
    if (itemName.includes(searchTerm)) {  // Check if the item name includes the search term
      searchItems[i].style.display = "block";  // Show matching items
    } else {
      searchItems[i].style.display = "none";  // Hide non-matching items
    }
  }
}

searchInput.addEventListener("input", search);  // Add real-time search functionality as user types in search input
