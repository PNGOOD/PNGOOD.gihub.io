const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/logo-2024.jpg") {
    myImage.setAttribute("src", "images/ice-moon.jpg");
  } else {
    myImage.setAttribute("src", "images/logo-2024.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("请输入您的用户名");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Baidu, ${myName}`;
}

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.onclick = function () {
  setUserName();
};
