const searchIcon = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener("click", (e) => {
  searchInput.classList.toggle("active");
  searchInput.focus();
  e.stopPropagation();
});

document.addEventListener("click", (e) => {
  const isSearchInput = e.target.matches(".search-input");
  const isSearchInputActive = searchInput.classList.contains("active");

  if (!isSearchInput && isSearchInputActive) {
    searchInput.classList.toggle("active");
  }
});
