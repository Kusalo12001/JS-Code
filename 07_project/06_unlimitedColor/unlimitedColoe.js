//ramdom color generate
const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
//console.log(randomcolor());
let intervelId;
const startChangeColor = function () {
  if (!intervelId) {
    intervelId = setInterval(ChangeColor, 1000);
  }

  function ChangeColor() {
    document.body.style.backgroundColor = randomcolor();
  }
};

const stoptChangeColor = function () {
  clearInterval(intervelId);
  intervelId = null;
};

//add event
document.querySelector("#start").addEventListener("click", startChangeColor);
document.querySelector("#stop").addEventListener("click", stoptChangeColor);
