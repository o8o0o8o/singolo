function validation() {
  let form = document.getElementById("form");
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);

  let name = document.getElementById("name").value;
  let namecheck = /\w{3,}/;
  let nameCheck = false;
  if (!namecheck.test(name)) {
    document.getElementById("name").placeholder =
      "Name should be at least 3 letters long";
    nameCheck = false;
  } else {
    nameCheck = true;
  }

  let email = document.getElementById("email").value;
  let mailCheck = false;
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
    document.getElementById("email").placeholder =
      "This is not a valid email address";
    mailCheck = false;
  } else {
    mailCheck = true;
  }
  return mailCheck && nameCheck;
}

function activeLink(id) {
  let links = document.querySelectorAll(".links");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active-link");
  }
  document.getElementById(`${id}`).classList.add("active-link");
}

function carouselRight() {
  const WIDTH = document.getElementById("slide1").getBoundingClientRect().width;
  const left = document.getElementById("main").getBoundingClientRect().left;
  let cat = document.getElementById("cat");
  let catRect = cat.getBoundingClientRect();
  const lw = left + WIDTH;
  if (catRect.left === left && cat.width === 0) {
    cat.style.width = `${WIDTH}px`;
  }
  if (catRect.left === left && catRect.width === WIDTH) {
    cat.style.left = `${lw}px`;
    cat.style.width = "0";
    cat.style.transition = "all 0.6s";
  }
  if (catRect.left.toFixed(3) === lw.toFixed(3) && catRect.width === 0) {
    cat.style.transition = "width 0.6s";
    cat.style.left = `${left}px`;
    cat.style.width = `${WIDTH}px`;
  }
}

function carouselLeftPrep() {
  const WIDTH = document.getElementById("slide1").getBoundingClientRect().width;
  const left = document.getElementById("main").getBoundingClientRect().left;
  let cat = document.getElementById("cat");
  let catRect = cat.getBoundingClientRect();
  const lw = left + WIDTH;
  if (catRect.left === left && cat.width === 0) {
    cat.style.left = `${lw}px`;
    cat.style.transition = "none";
  }
}

function carouselLeft() {
  const WIDTH = document.getElementById("slide1").getBoundingClientRect().width;
  const left = document.getElementById("main").getBoundingClientRect().left;
  let cat = document.getElementById("cat");
  let catRect = cat.getBoundingClientRect();
  const lw = left + WIDTH;
  if (catRect.left.toFixed(3) === lw.toFixed(3) && catRect.width === 0) {
    cat.style.transition = "all 0.6s";
    cat.style.left = `${left}px`;
    cat.style.width = `${WIDTH}px`;
  }
  if (catRect.left === left && catRect.width === WIDTH) {
    cat.style.width = "0";
  }
  setTimeout(() => {
    const WIDTH = document.getElementById("slide1").getBoundingClientRect()
      .width;
    const left = document.getElementById("main").getBoundingClientRect().left;
    let cat = document.getElementById("cat");
    let catRect = cat.getBoundingClientRect();
    const lw = left + WIDTH;
    if (catRect.left === left && cat.width === 0) {
      cat.style.left = `${lw}px`;
      cat.style.transition = "none";
    }
  }, 0);
}

main.onkeydown = main.onkeyup = main.onkeypress = response;

function response() {
  const left = document.getElementById("main").getBoundingClientRect().left;
  let cat = document.getElementById("cat");
  cat.style.left = `${left}px`;
  const WIDTH = document.getElementById("slide1").getBoundingClientRect().width;
  let buttons = document.getElementById("nav-buttons");
  let navIcons = document.getElementById("nav-icon");
  if (WIDTH > 767) {
    buttons.classList.toggle("hidden");
    //navIcons.classList.toggle("hidden");
  }
}

function phoneScreen(id) {
  let el = document.getElementById(`${id}`);
  el.classList.toggle("hidden");
  console.log(el.classList);
}

function portoFun(id) {
  activeLink(id);
  let img = document.querySelectorAll(".img-size");
  let temp = img[0].cloneNode(true);
  document.getElementById("image-container").appendChild(temp);
  img[0].parentNode.removeChild(img[0], img[1]);
}

function emphasize(id) {
  let img = document.querySelectorAll(".img-size");
  for (let i = 0; i < img.length; i++) {
    if (img[i].id === id) {
      img[i].classList.add("border-me");
    } else {
      img[i].classList.remove("border-me");
    }
  }
}

function onTheGo() {
  if (validation()) {
    let modal = document.getElementById("myModal");
    let message = [];
    message.push("Письмо отправлено");
    message.push(document.getElementById("subject").value);
    if (message[1].length > 0) {
      message[1] = `Тема: ${message[1]}`;
    } else {
      message[1] = "Без темы";
    }
    message.push(document.getElementById("description").value);
    if (message[2].length > 0) {
      message[2] = `Описание: ${message[2]}`;
    } else {
      message[2] = "Без описания";
    }
    let modalContent = document.getElementById("modal-content");
    for (let i = 0; i < message.length; i++) {
      let temp = document.createElement("p");
      temp.innerHTML = message[i];
      modalContent.appendChild(temp);
    }
    let close = document.createElement("span");
    close.innerHTML = "Ok";
    close.classList.add("close");
    modalContent.appendChild(close);
    modal.style.display = "block";
    close.onclick = function() {
      modal.style.display = "none";
      document.getElementById("email").value = "";
      document.getElementById("name").value = "";
      document.getElementById("description").value = "";
      document.getElementById("subject").value = "";
    };
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
}

function toggleNav() {
  const WIDTH = document.getElementById("slide1").getBoundingClientRect().width;
  if (WIDTH < 768) {
    const HEIGHT = document.documentElement.clientHeight;
    let icon = document.getElementById("nav-icon");
    icon.classList.toggle("turn");
    let nav = document.getElementById("nav-mobile");
    nav.classList.toggle("hidden");
    nav.style.height = `${HEIGHT}px`;
    let buttons = document.getElementById("nav-buttons");
    buttons.classList.toggle("hidden");
  }
}
