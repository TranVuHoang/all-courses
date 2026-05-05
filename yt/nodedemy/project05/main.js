// lấy phần tử có class "search-box__btn"
const btnSearch = document.querySelector(".search-box__btn");

// lắng nghe sự kiện click vào button
btnSearch.addEventListener("click", () => {
  // lấy phần tử cha của button rồi toggle class "open"
  // nếu chưa có "open" thì thêm vào~
  // nếu đã có thì xóa đi
  btnSearch.parentElement.classList.toggle("open");

  // auto focus vào ô input khi nhấn vào button
  btnSearch.previousElementSibling.focus();
});
