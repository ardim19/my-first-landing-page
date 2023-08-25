// toggle class active navbar
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};
// toggle class active search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// klik diluar sidebar untuk menghilangkan nav
const search = document.querySelector("#search-button");
document.addEventListener("click", function (e) {
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// click
const klaikk = document.querySelectorAll(`.kliak`);
const klik = document.querySelectorAll(`.klik`);
const prevbtn = document.getElementById(`prev-btn`);
const nextbtn = document.getElementById(`next-btn`);
const prevbtn1 = document.getElementById(`prev-btn1`);
const nextbtn1 = document.getElementById(`next-btn1`);
const allImages = document.querySelectorAll(`.allImages`);
const allImages2 = document.querySelectorAll(`.allimages2`);
const bgksng = document.querySelector(`.bgksng`);
const border = document.querySelector(`.border`);
const border1 = document.querySelector(`.border1`);
let G1 = 11;
let G2 = 8;
let ubahIdx = 0;

bgksng.addEventListener(`click`, function () {
  this.style.display = `none`;
  border.style.display = `none`;
  border1.style.display = `none`;
});
function ubahDisplay(position) {
  border.style.background = `url(img/img${ubahIdx}.jpg)center/cover no-repeat`;
  border1.style.background = `url(img/image${ubahIdx}.jpg)center/cover no-repeat`;
}
// klik nya ga fungsi sebenernya
// card1
klik.forEach(function (btn1, index1) {
  btn1.addEventListener(`click`, () => {
    bgksng.style.display = `block`;
    border1.style.display = `block`;
    ubahIdx = index1 + 1;
    ubahDisplay(klik);
  });
});

prevbtn1.addEventListener(`click`, function () {
  ubahIdx--;
  if (ubahIdx === 0) {
    ubahIdx = G1 - 1;
  }
  ubahDisplay(ubahIdx);
  console.log(ubahIdx);
});
// if (this.classList.console(border)) {
//   [G1, 1][(1, G1)];
// }
nextbtn1.addEventListener(`click`, () => {
  ubahIdx++;
  if (ubahIdx === G1) {
    ubahIdx = 1;
    console.log(ubahIdx);
  }
  ubahDisplay(ubahIdx);
  console.log(nextbtn);
});
klaikk.forEach(function (btn, index) {
  btn.addEventListener(`click`, function () {
    bgksng.style.display = `block`;
    border.style.display = `block`;
    ubahIdx = index + 1;
    ubahDisplay(ubahIdx);
  });
});
// card.forEach(function (btn, index) {
//   btn.addEventListener(`click`, function () {
//     bgksng.style.display = `block`;
//     border.style.display = `block`;
//     ubahIdx = index + 1;
//     ubahDisplay(ubahIdx);
//   });
// });
prevbtn.addEventListener(`click`, () => {
  ubahIdx--;
  if (ubahIdx === 0) {
    ubahIdx = G2;
  }
  ubahDisplay(ubahIdx);
});
nextbtn.addEventListener(`click`, () => {
  ubahIdx++;
  if (ubahIdx === G2) {
    ubahIdx = 1;
  }
  ubahDisplay(ubahIdx);
});

// card
