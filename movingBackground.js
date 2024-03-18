"use strict";
const body = document.body;
// const bgColors = [
//   "#FF204E",
//   "#5D0E41",
//   "#00224D",
//   "#496989",
//   "#240A34",
//   "#891652",
//   "#070F2B",
//   "#211951",
//   "#030637",
//   "#222831",
//   "#240A34",
//   "#891652",
// ];
const bgColors = [
  "#293462",
  "#D61C4E",
  "#FEB139",
  "#FFF80A",
  "#FFF3C7",
  "#FC819E",
  "#FEC7B4",
  "#FC819E",
  "#A5DD9B",
  "#C5EBAA",
  "#B5C0D0",
];

//============ generating random number of divs to be in the background ============
function generateBgDivs(minDivNum) {
  let divNum = (Math.random() * 200).toFixed(0);
  divNum < minDivNum ? (divNum = (Math.random() * 200).toFixed(0)) : "";
  // creating the divs
  let bgDivs = [];
  for (let i = 0; i < divNum; i++) {
    let bgDiv = document.createElement("div");
    bgDiv.classList.add(`bgDiv`);
    bgDiv.classList.add(`bg${i + 1}`);
    bgDivs.push(bgDiv);
  }
  return bgDivs;
}
// ============ generate random sizes
let bgDivs = generateBgDivs(30);
bgDivs.forEach((bgDiv) => {
  let randomSize = (Math.random() * 40).toFixed(0);
  randomSize < 1 ? (randomSize = (Math.random() * 40).toFixed(0)) : "";
  bgDiv.style.width = `${randomSize}vh`;
});
// ============ generate random colors & places ============
bgDivs.forEach((bgDiv) => {
  // ====> colors
  bgDiv.style.backgroundColor =
    bgColors[(Math.random() * (bgColors.length - 1)).toFixed(0)];
  // bgDiv.style.backgroundColor = `rgb(
  //   ${(Math.random() * 255).toFixed(0)}
  //   ${(Math.random() * 255).toFixed(0)}
  //   ${(Math.random() * 255).toFixed(0)})`;
  // ====> positions
  bgDiv.style.top = `${Math.random() * 100}%`;
  bgDiv.style.left = `${Math.random() * 100}%`;
});
// ============ adding the divs to a big div then to the body ============
let bgContainer = document.createElement("div");
bgContainer.classList.add("bg-container");
bgDivs.forEach((bgDiv) => bgContainer.append(bgDiv));
document.body.append(bgContainer);

// ============ initial animation
window.onload = function () {
  bgDivs.forEach((bgDiv) => {
    bgDiv.style.top = `${Math.random() * 100}%`;
    bgDiv.style.left = `${Math.random() * 100}%`;
  });
};
// ============ generate random places to animate them
setInterval(function () {
  bgDivs.forEach((bgDiv) => {
    bgDiv.style.top = `${Math.random() * 100}%`;
    bgDiv.style.left = `${Math.random() * 100}%`;
  });
}, 8000);

let myDiv = document.getElementById("test");
