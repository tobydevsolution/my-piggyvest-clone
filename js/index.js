// document.documentElement.className = "index.js";

// var menu = document.querySelector(".navbar-nav"),
//   button = document.querySelector(".navbar-toggler"),
//   dropdown = document.querySelector(".navbar");

// button.onclick = function () {
//   classie.toggle(navbar - nav, "navbar-nav-active");
// };

// // Close menu when clicking outside
// // See: https://css-tricks.com/dangers-stopping-event-propagation/
// document.addEventListener("click", function (event) {
//   if (event.target !== dropdown && !dropdown.contains(event.target)) {
//     // hide the menu
//     classie.removeClass(menu, "navbar-nav-active");
//   }
// });

const loginForm = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");

window.onscroll = function () {
  scrollFunnction();
};

function scrollFunnction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("navbar").style.backgroundColor = "#fff";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
};

// // const messages = document.querySelectorAll(".message-box");
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle("card-slider", entry.isIntersecting);
//     });
//   },
//   {
//     threshold: 0,
//   }
// );
// const lastMessageObserver = new IntersectionObserver(
//   (entries) => {
//     const lastMessage = entries[0];
//     if (!lastMessage.isIntersecting) return;
//     loadNewMessages();
//     lastMessageObserver.unobserve(lastMessage.target);
//     lastMessageObserver.observe(
//       document.querySelector(".message-box:last-child")
//     );
//   },
//   {
//     rootMargin: "50px",
//   }
// );
// lastMessageObserver.observe(document.querySelector(".message-box:last-child"));

// messages.forEach((message-box) => {
//   observer.observe(message-box)
// });

// const messageSlider = document.querySelector(".message-slider");
// function loadNewMessages() {
//   for (let i = 0; i < 4; i++) {
//     const message = document.createElement("div");
//     message.textContent = "New Message";
//     message.classList.add("message-box");
//     messageSlider.append(message - box);
//   }
// }
