const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (email.value === "" || !isEmail(email.value)) {
    email.parentElement.classList.add("error");
    setTimeout(function () {
      email.parentElement.classList.remove("error");
    }, 2000);
  } else {
    email.parentElement.classList.add("success");
  }
});

function isEmail(input) {
  const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(input).toLowerCase());
}
