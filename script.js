function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //pegar a tag img do profile
  const img = document.querySelector("#profile img")
  //substituir a imagem
  //se tiver a classe light, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  }
  //se não tiver a classe light, manter a imagem normal
  else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
