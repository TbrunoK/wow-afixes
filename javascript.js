function normalizarTexto(texto) {
  return texto
    .normalize("NFD") // Normaliza os caracteres acentuados em caracteres comuns e acentos separados
    .replace(/[\u0300-\u036f]/g, "") // Remove os acentos separados
    .replace(/[^\w\s]/gi, "") // Remove outros caracteres especiais
    .toLowerCase()
}
// Função para buscar o afixo quando o usuário clica no botão de busca
function buscarAfixo() {
  var termoBusca = normalizarTexto(document.getElementById("searchInput").value)
  var afixos = document.querySelectorAll(".lista-completa li")
  console.log(afixos)

  for (var i = 0; i < afixos.length; i++) {
    let encontrados = 0
    var afixo = afixos[i]
    var nomeAfixo = normalizarTexto(afixo.textContent)
    console.log(nomeAfixo)
    afixo.classList.remove("destacado")
    if (nomeAfixo.includes(termoBusca)) {
      afixo.classList.add("destacado")
      afixo.scrollIntoView({ behavior: "smooth", block: "center" })
      encontrados++
    }
  }

  if ((encontrados = 0)) {
    alert("Afixo não encontrado.")
  }

  return
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

// Seleciona o link "Dark Mode" pelo ID
const darkModeToggle = document.getElementById("darkModeToggle")

// Adiciona um ouvinte de evento de clique ao link
darkModeToggle.addEventListener("click", function () {
  // Alterna entre os modos claro e escuro
  if (document.body.classList.contains("dark-mode")) {
    // Se estiver no modo escuro, remove a classe dark-mode do site
    document.body.classList.remove("dark-mode")
  } else {
    // Se estiver no modo claro, adiciona a classe dark-mode ao site
    document.body.classList.add("dark-mode")
  }
})
