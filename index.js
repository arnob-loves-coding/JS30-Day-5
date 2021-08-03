const panel = document.querySelectorAll(".panel");
function handleClick() {
  this.classList.toggle("active");
}
panel.forEach((panel) => panel.addEventListener("click", handleClick));
