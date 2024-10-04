function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("dark")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("dark")) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "dark mode user image")
  } else {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "light mode user image")
  }
}
