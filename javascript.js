function normalizarTexto(texto) {
  return texto
    .normalize("NFD") // Normaliza os caracteres acentuados em caracteres comuns e acentos separados
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos separados
    .replace(/[^\w\s]/gi, "") // Remove outros caracteres especiais
    .toLowerCase() // Converte para minúsculas
}
// Função para buscar o afixo quando o usuário clica no botão de busca
function buscarAfixo() {
  var termoBusca = normalizarTexto(document.getElementById("searchInput").value)
  var afixos = document.querySelectorAll(".lista-completa li")

  for (var i = 0; i < afixos.length; i++) {
    var afixo = afixos[i]
    var nomeAfixo = normalizarTexto(afixo.textContent)

    if (nomeAfixo.includes(termoBusca)) {
      afixo.classList.add("destacado")
      afixo.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }
  }

  alert("Afixo não encontrado.")
}

// Adiciona um event listener para o evento 'keypress' no campo de busca
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (event) {
    // Verifica se a tecla pressionada é a tecla 'Enter'
    if (event.key === "Enter") {
      // Chama a função buscarAfixo() quando a tecla 'Enter' é pressionada
      buscarAfixo()
    }
  })
