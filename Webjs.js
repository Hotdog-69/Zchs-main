lvl = 0
window.onload = function() {
 lvl = localStorage.getItem("o") || 0
 censoring()
 checking()
}

function sets() {
  lvl = document.querySelector('input[name="cent"]:checked').value;
  localStorage.setItem("o",lvl)
}

function gt() {
 lvl = localStorage.getItem("o");
}

function censoring() {
if (lvl>1) {
  const censors1 = document.querySelectorAll(".censor1")
  censors1.forEach(element => {element.textContent = "- REDACTED -"})
  censors1.forEach(element => {element.setAttribute("color","red")})
}

if (lvl>2) {
  const censors2 = document.querySelectorAll(".censor2")
  censors2.forEach(element => {element.textContent = "- REDACTED -"})
  censors2.forEach(element => {element.setAttribute("color","red")})
}

if (lvl>3) {
  const censors3 = document.querySelectorAll(".censor3")
  censors3.forEach(element => {element.textContent = "- REDACTED -"})
  censors3.forEach(element => {element.setAttribute("color","red")})
}}

function checking() {
document.querySelector('input[name="cent"][value="' +lvl+'"]').checked = true;
}



