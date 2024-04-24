function buscarAfixo() {
  var termoBusca = document.getElementById("searchInput").value.toLowerCase()
  var afixos = document.querySelectorAll(".lista-completa li")

  for (var i = 0; i < afixos.length; i++) {
    var afixo = afixos[i]
    var nomeAfixo = afixo.textContent.toLowerCase()

    if (nomeAfixo.includes(termoBusca)) {
      // Remove a classe 'destacado' de todos os afixos
      afixos.forEach(function (item) {
        item.classList.remove("destacado")
      })

      // Adiciona a classe 'destacado' ao afixo encontrado
      afixo.classList.add("destacado")

      // Rola a página até o afixo encontrado
      afixo.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }
  }

  alert("Afixo não encontrado.")
}
