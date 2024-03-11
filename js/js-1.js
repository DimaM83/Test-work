const singleBtn = document.querySelector("#single");

const handleClick = () => {
  console.log("click event listener callback");
};

singleBtn.addEventListener("click", handleClick);

// ===============================================
const multiBtn = document.querySelector("#multiple");

const firstCallback = () => {
  console.log("First callback!");
};
const secondCallback = () => {
  console.log("Second callback!");
};
const thirdCallback = () => {
  console.log("Third callback!");
};
const addCallback = () => {
    console.log("12345");
}

multiBtn.addEventListener("click", firstCallback);
multiBtn.addEventListener("click", secondCallback);
multiBtn.addEventListener("click", thirdCallback);
multiBtn.addEventListener("click", addCallback);
