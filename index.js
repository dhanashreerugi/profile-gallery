var data = [
  {
    name: "Akhila",
    img: "https://www.pngarts.com/files/11/Avatar-PNG-High-Quality-Image.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem explicabo sint autem optio consequatur quo atque neque, doloribus libero maiores saepe distinctio esse, ex quasi cum! Animi, fugiat laboriosam.",
  },
  {
    name: "Nishant",
    img: "https://cdn-icons-png.flaticon.com/512/186/186313.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    name: "Akhilesh",
    img: "avatar_image/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png",
    description:
      "Lorem ipsum was purposefully designed to have no meaning, but appear like real text, making it the perfect placeholder.Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolorem explicabo sint autem optio consequatur quo atque neque",
  },
];

loopData(data);

function loopData(userData, arg = false) {
  document.getElementById("root").innerHTML = "";
  for (let i = 0; i < userData.length; i++) {
    document.getElementById("root").innerHTML += `<div class='${
      i == 1 ? `middle` : `side`
    }-container'>
        <div class='${i == 1 ? `middle` : `side`}-profile-img'>
            <img src=${data[i].img} class='${
      i == 1 ? `middle` : `side`
    }-profile-img' />  
        
        ${
          i != 1 && arg
            ? `<div style="text-align:center"> ${userData[i].description} </div>`
            : ""
        } 
        </div> 
${
  i == 1
    ? `<div class='profile-card'>
    <div>
            <h1>${i == 1 ? userData[i].name : ""} </h1>  
        </div>

    <h3>${userData[i].description} </h3>
    <div class='fa fa-arrow-left' onclick="leftShift()"></div>  
    <div class='fa fa-arrow-right' onclick="rightShift()"></div> 
</div> `
    : ``
}
</div>`;
  }
}

function leftShift() {
  let first = data.shift();
  data.push(first);
  // console.log(data);
  loopData(data);
}

function rightShift() {
  let last = data.pop();
  data.unshift(last);
  // console.log(data);
  loopData(data);
}

function toggleSideButton(arg) {
  // document.getElementById("buttonSide").innerHTML = "";
  if (arg) {
    document.getElementById(
      "buttonSide"
    ).innerHTML = `<i class="fa-sharp fa-solid fa-rectangle-list" onclick="toggleSideButton(${false})"></i>`;
    loopData(data, true);
  } else {
    document.getElementById(
      "buttonSide"
    ).innerHTML = `<i class="fa-sharp fa-regular fa-rectangle-list" onclick="toggleSideButton(${true})"></i>`;
    loopData(data, false);
  }
}
