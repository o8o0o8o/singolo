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

function carousel(clas) {
  let slides = document.querySelectorAll(".slider");
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].classList.contains(`${clas}`)) {
      slides[i].classList.add("hidden");
      continue;
    }
    slides[i].classList.remove("hidden");
  }
}

function phoneScreen(id) {
  let el = document.getElementById(`${id}`);
  if (el.classList.contains("hidden")) {
    el.classList.remove("hidden");
  } else {
    el.classList.add("hidden");
  }
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
    //let span = document.getElementsByClassName("close")[0];

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
    };
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
}
