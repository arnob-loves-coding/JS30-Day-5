const panels = document.querySelectorAll(".panels");
function handleClick() {
  this.classList.toggle("active");
}
panels.forEach((panel) => panel.addEventListener("click", handleClick));
